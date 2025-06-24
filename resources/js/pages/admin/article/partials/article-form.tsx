import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TextField } from "@/components/ui/text-field";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { STATUSARTICLE, Topic } from "@/types/article";
import { router } from "@inertiajs/react";

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(15, "Title must be at least 15 characters")
    .max(100, "Title must be at most 100 characters")
    .required("Title is required"),
  teaser: yup.string().required("Teaser is required"),
  topic: yup
    .number()
    .typeError("Topic must be a number")
    .required("Topic is required"),
  content: yup
    .string()
    .min(100, "Content must be at least 100 characters")
    .required("Content is required"),
  status: yup.string().required("Title is required"),
});

type ArticleFormValues = yup.InferType<typeof validationSchema>;

interface CreatePageProps {
  topics: Topic[];
}

function ArticleForm({ topics }: CreatePageProps) {
  const { handleSubmit, control, setError } = useForm<ArticleFormValues>({
    resolver: yupResolver(validationSchema),

    defaultValues: {
      title: "",
      teaser: "",
      topic: undefined,
      content: "",
      status: "published",
    },
  });

  const onSubmit = (data: ArticleFormValues) => {
    router.post(route("articles.store"), data);
  };

  const statuses = ["published", "draft"];

  return (
    <Form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Title"
            placeholder="Your article title"
            isRequired
            isInvalid={!!error}
            validationBehavior="aria"
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="topic"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Select
            onSelectionChange={onChange}
            selectedKey={value}
            isRequired
            label="Design software"
            placeholder="Select a software"
          >
            <Select.Trigger />
            <Select.List items={topics}>
              {(item) => (
                <Select.Option id={item.id} textValue={item.name}>
                  {item.name}
                </Select.Option>
              )}
            </Select.List>
          </Select>
        )}
      />

      <Controller
        control={control}
        name="teaser"
        render={({ field, fieldState: { error } }) => (
          <Textarea
            {...field}
            label="Teaser"
            placeholder="write your teaser here, describe what is your article about.."
            isRequired
            isInvalid={!!error}
            validationBehavior="aria"
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="content"
        render={({ field, fieldState: { error } }) => (
          <Textarea
            {...field}
            className="w-full min-h-[200px]  "
            label="Content (Markdown)"
            placeholder="write your content here.."
            isRequired
            isInvalid={!!error}
            validationBehavior="aria"
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="status"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Select
            onSelectionChange={onChange}
            selectedKey={value}
            isRequired
            label="Status"
          >
            <Select.Trigger />
            <Select.List items={STATUSARTICLE}>
              {(item) => (
                <Select.Option id={item.name} textValue={item.name}>
                  {item.name}
                </Select.Option>
              )}
            </Select.List>
          </Select>
        )}
      />

      <Button intent="secondary" className="mt-4" type="submit">
        Save Article
      </Button>
    </Form>
  );
}

export default ArticleForm;
