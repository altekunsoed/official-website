"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sora } from "@/app/styles/fonts";
import { Input } from "@/components/ui/input";
import createSupabaseBrowerClient from "@/lib/supabase/client";

const FormSchema = z.object({
  topic: z
    .string()
    .min(3, { message: "Topic must be at least 3 characters." })
    .max(50, { message: "Topic must not be longer than 50 characters." }),
  details: z
    .string()
    .min(10, {
      message: "Details must be at least 10 characters.",
    })
    .max(160, {
      message: "Details must not be longer than 160 characters.",
    }),
});

const FeedbackSection = () => {
  const supabase = createSupabaseBrowerClient();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(request: z.infer<typeof FormSchema>) {
    const { data, error } = await supabase
      .from("critique")
      .insert({
        topic: request.topic,
        details: request.details,
      })
      .select();

    if (error) {
      console.error(error);
    }
  }

  return (
    <div
      className={`${sora.className} w-full h-fit flex-col justify-center items-start px-8 py-8 gap-5 flex text-foreground`}
    >
      <div className="flex flex-col md:grid md:grid-flow-col grid-cols-9 w-full py-5 justify-center items-start gap-2 md:gap-5">
        <div className="col-span-4 md:px-2 justify-start items-start flex">
          <div className="self-stretch flex-col justify-start items-start flex">
            <div className={`${sora.className} text-8xl font-bold`}>
              Feedback
            </div>
          </div>
        </div>
        <div className="col-span-5 w-full md:px-2 justify-start items-start flex">
          <div className="self-stretch pr-8 flex-col justify-start items-start flex">
            <div className={`${sora.className} text-xl font-normal`}>
              Your feedback is invaluable to us, and we genuinely welcome the
              opportunity to engage with you. Please take a moment to complete
              the form below. Don't worry, your feedback will be anonymous.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch pt-6 pb-2 justify-between items-start flex">
        <div className="basis-1/2 h-fit relative">
          <div className="py-2 left-0 top-[20px] absolute flex-col justify-start items-start flex">
            <div className="text-xl font-bold uppercase leading-7">
              We’re Ready!
            </div>
          </div>
          <div className="left-0 top-[64px] absolute flex-col justify-start items-start flex">
            <div className="text-4xl font-bold leading-10">Get In Touch</div>
          </div>
          <div className="left-0 top-[144px] absolute flex-col justify-start items-start flex">
            <div className="text-lg font-normal leading-7">Head-quarters:</div>
          </div>
          <div className="left-0 top-[172px] absolute flex-col justify-start items-start flex">
            <div className="text-neutral-300 text-base font-normal leading-normal">
              Indonesia, Purbalingga
            </div>
          </div>
          <div className="left-0 top-[196px] absolute flex-col justify-start items-start flex">
            <div className="text-neutral-300 text-base font-normal leading-normal">
              Email: aliansilaborat@gmail.com
            </div>
          </div>
        </div>
        <div className="basis-1/2 h-fit pt-5 flex-col justify-start items-start flex">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="self-stretch flex-col justify-start items-stretch gap-5 flex"
            >
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Topic"
                        className="bg-foreground text-background placeholder:text-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Details"
                        className=" min-h-72 bg-foreground text-background placeholder:text-background"
                        cols={12}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="text-center text-black text-base font-normal leading-normal"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
