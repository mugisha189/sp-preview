'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CalendarIcon } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { AcademicYear } from './types';

const termSchema = z.object({
  startDate: z.date({ required_error: 'Start date is required' }),
  endDate: z.date({ required_error: 'End date is required' }),
});

const formSchema = z.object({
  academicYear: z.string().min(1, 'Academic Year is required'),
  startDate: z.date({ required_error: 'Start date is required' }),
  endDate: z.date({ required_error: 'End date is required' }),
  terms: z.array(termSchema).min(1, 'At least one term is required'),
});

type FormSchema = z.infer<typeof formSchema>;

export const UpdateAcademicYearForm = ({
  open,
  onOpenChange,
  academicYear,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  academicYear: AcademicYear;
}) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      academicYear: academicYear.name,
      startDate: new Date(academicYear.startDate),
      endDate: new Date(academicYear.endDate),
      terms: academicYear.terms.map((t) => ({
        startDate: new Date(academicYear.startDate),
        endDate: new Date(academicYear.endDate),
      })),
    },
  });

  const { fields, append } = useFieldArray({
    control: form.control,
    name: 'terms',
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Update Academic Year</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
            <FormField
              control={form.control}
              name="academicYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic Year*</FormLabel>
                  <FormControl>
                    <Input placeholder="Academic Year" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date*</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                          >
                            {field.value ? format(field.value, 'MM/dd/yyyy') : 'mm/dd/yyyy'}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                      </PopoverContent>
                    </Popover>
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
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                          >
                            {field.value ? format(field.value, 'MM/dd/yyyy') : 'mm/dd/yyyy'}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-base font-medium">Terms</h4>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => append({ startDate: undefined as any, endDate: undefined as any })}
                >
                  Update Term ↓
                </Button>
              </div>

              <div className="space-y-4">
                {fields.map((term, index) => (
                  <div key={term.id} className="border rounded-md p-4 space-y-4 bg-muted/50">
                    <h5 className="text-sm font-semibold">Term {index + 1}</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`terms.${index}.startDate`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start Date*</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                                  >
                                    {field.value ? format(field.value, 'MM/dd/yyyy') : 'mm/dd/yyyy'}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`terms.${index}.endDate`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>End Date*</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                                  >
                                    {field.value ? format(field.value, 'MM/dd/yyyy') : 'mm/dd/yyyy'}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DialogFooter className="pt-6">
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">
                Update Academic Year <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
