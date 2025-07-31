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
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  contractTitle: z.string().min(1, 'Contract title is required'),
  contractType: z.string().min(1, 'Contract type is required'),
  partyA: z.string().min(1, 'Party A is required'),
  partyB: z.string().min(1, 'Party B is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  contractValueA: z.string().min(1, 'Contract value is required'),
  termsAndConditions: z.string().min(1, 'Terms and conditions are required'),
  digitalSignature: z.any().refine((files) => files?.length == 1, 'Digital signature is required.'),
});

type FormSchema = z.infer<typeof formSchema>;

export const AddContractModal = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contractTitle: '',
      contractType: '',
      partyA: '',
      partyB: '',
      startDate: '',
      endDate: '',
      contractValueA: '',
      termsAndConditions: '',
      digitalSignature: undefined,
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          Add new contract
          <ArrowRight className="ml-2 h-4 w-4 -rotate-45" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="pb-2">Adding A Contract</DialogTitle>
          <Separator />
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-3">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="contractTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Title*</FormLabel>
                    <FormControl>
                      <Input placeholder="Contract Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contractType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Type*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Contract Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="placement-contract">Placement Contract</SelectItem>
                        <SelectItem value="accommodation-contract">Accommodation Contract</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="partyA"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Party A*</FormLabel>
                    <FormControl>
                      <Input placeholder="Party A" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="partyB"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Party B*</FormLabel>
                    <FormControl>
                      <Input placeholder="Party B" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date*</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date*</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contractValueA"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Value A*</FormLabel>
                    <FormControl>
                      <Input placeholder="Contract Value" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="termsAndConditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Terms and Conditions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Key terms, conditions and requirements" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="digitalSignature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Digital Signature*</FormLabel>
                  <FormControl>
                    <Input type="file" {...form.register('digitalSignature')} />
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
                Create Contract <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
