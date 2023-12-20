'use client';
import React, {useState} from 'react';
import {Input} from '@/components/ui/input';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {Button} from './ui/button';
import {PlusCircleIcon, SearchIcon} from 'lucide-react';
import Structures from './Structures';

const FormSchema = z.object({
  compound_names: z.array(
    z.string().min(2, {
      message: 'Compound or molecule must be at least 2 characters.',
    }),
  ),
});

const Search = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      compound_names: [''],
    },
  });

  const [data, setData] = useState<any>([]);
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setData(data);
    form.reset();
  }

  return (
    <div className="w-full flex flex-col gap-9">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-[90%] w-[90%] mx-auto space-y-3">
          {form.getValues('compound_names').map((_, index) => (
            <FormField
              key={index}
              control={form.control}
              name={`compound_names.${index}`}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="p-4 md:p-6 rounded-md text-black outline-none w-full"
                      type="text"
                      placeholder={`Compound name #${index + 1}`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div className="flex flex-row gap-x-2 ">
            <Button
              type="button"
              onClick={() =>
                form.setValue('compound_names', [
                  ...form.getValues('compound_names'),
                  '',
                ])
              }
              className="mt-2 bg-gray-600 hover:bg-gray-500">
              <PlusCircleIcon />
            </Button>
            <Button
              type="submit"
              className="mt-2 bg-blue-500 hover:bg-blue-400">
              <SearchIcon />
              Search
            </Button>
          </div>
        </form>
      </Form>
      <div className="w-full flex items-center justify-center md:flex-row">
        <Structures data={data} />
      </div>
    </div>
  );
};

export default Search;
