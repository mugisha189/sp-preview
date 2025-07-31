import PasswordInput from '@/components/core/inputs/PasswordInput';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, Link } from '@tanstack/react-router';
import Cookies from 'js-cookie';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const Route = createFileRoute('/auth/login')({
  component: LoginPage,
});

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  remember: z.boolean().optional(),
});

type FormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isPending, startTransition] = React.useTransition();
  const search = Route.useSearch() as Record<string, any>;

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    mode: 'onBlur',
  });

  function onSubmit(data: FormData) {
    startTransition(async () => {
      console.log(data);
      Cookies.set('token', 'test', {
        expires: 1,
        sameSite: 'Strict',
      });
      const isSamePage = window.location.pathname === search.redirect;
      console.log('isSamePage', isSamePage);

      window.location.href = !isSamePage && search.redirect ? search.redirect : '/';
    });
  }

  return (
    <div className="flex text-center flex-col max-w-md w-full space-y-6">
      <div className="flex justify-center items-center space-y-2 mt-4 mb-2">
        <img src="/logortb.jpg" alt="RTB Rwanda TVET Board" className="w-20 mb-2" />
        <h1 className="text-2xl font-bold tracking-tight text-center">
          Dual<span className="text-primary">Training</span>
        </h1>
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl font-bold tracking-tight text-center">Login</h1>
        <p className="text-sm text-muted-foreground">Welcome back to Dual Training Management System</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Enter your email" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password*</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Enter your password" {...field} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="!mt-0">Keep me logged in</FormLabel>
                </FormItem>
              )}
            />
            <Link to="/auth/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full mt-2" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}
