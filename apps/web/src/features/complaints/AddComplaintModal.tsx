import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  complaints: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export const AddComplaintModal = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      complaints: '',
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'lg'}>
          Add new complaint <ArrowRight className="ml-2 -rotate-45" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add complaint</DialogTitle>
          <Separator />
        </DialogHeader>
        <Form {...form}>
          <div className="flex justify-between py-6 gap-4">
            <div>
              <p className="font-medium">Sina Gerard Nyiragarama</p>
              <p className="text-muted-foreground text-sm">Nyirangarama in Rulindo District</p>
            </div>

            <div>
              <p className="font-medium">Training timeline</p>
              <p className="text-muted-foreground text-sm">12 May 2025 - 24 July 2025</p>
            </div>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="complaints"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Complaint</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">
                Send Complaint <ArrowRight className="ml-2 h-4 w-4 -rotate-45" />
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
