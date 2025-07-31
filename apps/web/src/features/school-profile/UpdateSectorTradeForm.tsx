'use client';

import { MultiSelect } from '@/components/core/selects/multiselect';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SectorTrade } from './types';

const formSchema = z.object({
  tradeName: z.string().min(1, 'Trade Name is required'),
  sectorName: z.string().min(1, 'Sector Name is required'),
  levels: z.array(z.string()).min(1, 'At least one level is required'),
  studentsEnrolled: z.string().min(1, 'Number of Students Enrolled is required').regex(/^\d+$/, 'Must be a number'),
});

type FormSchema = z.infer<typeof formSchema>;

export const UpdateSectorTradeForm = ({
  open,
  onOpenChange,
  sectorTrade,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sectorTrade: SectorTrade;
}) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tradeName: sectorTrade.tradeName,
      sectorName: sectorTrade.sectorName,
      levels: sectorTrade.levels,
      studentsEnrolled: sectorTrade.studentsEnrolled.toString(),
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Register Sector & Trade</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-2">
            <FormField
              control={form.control}
              name="tradeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trade Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Trade Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sectorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sector Name*</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Sector Name" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Construction">Construction</SelectItem>
                      <SelectItem value="Mechanics">Mechanics</SelectItem>
                      <SelectItem value="Fashion">Fashion</SelectItem>
                      <SelectItem value="Electricity">Electricity</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="levels"
              render={({ field }) => {
                const selectedItems = field.value.map((val) => {
                  const found = [
                    { value: '1', label: 'Level 1' },
                    { value: '2', label: 'Level 2' },
                    { value: '3', label: 'Level 3' },
                    { value: '4', label: 'Level 4' },
                    { value: '5', label: 'Level 5' },
                  ].find((opt) => opt.value === val);
                  return found || { value: val, label: val };
                });

                return (
                  <FormItem>
                    <FormLabel>Levels*</FormLabel>
                    <FormControl>
                      <MultiSelect
                        items={[
                          { value: '1', label: 'Level 1' },
                          { value: '2', label: 'Level 2' },
                          { value: '3', label: 'Level 3' },
                          { value: '4', label: 'Level 4' },
                          { value: '5', label: 'Level 5' },
                        ]}
                        value={selectedItems}
                        onValueChange={(items) => {
                          field.onChange(items.map((item) => item.value));
                        }}
                        placeholder="Select Levels"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="studentsEnrolled"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Students Enrolled*</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Number of Students Enrolled" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="pt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">
                Register Sector & Trade <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
