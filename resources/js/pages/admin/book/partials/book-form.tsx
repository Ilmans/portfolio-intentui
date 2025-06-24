"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TextField } from "@/components/ui/text-field";
import { Textarea } from "@/components/ui/textarea";
import { router } from "@inertiajs/react";

import { Book, BookFormValues } from "@/types/book"; // pastikan kamu sudah buat tipe ini

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  about: yup.string().required("About is required"),
  url: yup.string().url("Must be a valid URL").nullable().default(null),
  cover_url: yup.mixed<FileList>().nullable().default(null),
});

interface BookFormProps {
  book: Book | null;
}

function BookForm({ book }: BookFormProps) {
  const isEditing = !!book;

  const { handleSubmit, control, setError, watch } = useForm<BookFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: book?.title ?? "",
      about: book?.about ?? "",
      url: book?.url ?? null,
      cover_url: null,
    },
  });

  const onSubmit = (data: BookFormValues) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("about", data.about);
    if (data.cover_url && data.cover_url.length > 0) {
      formData.append("cover_url", data.cover_url[0]);
    }
    if (data.url) formData.append("url", data.url);

    if (isEditing && book) {
      formData.append("_method", "PUT");
      router.post(route("books.update", { id: book.id }), formData);
    } else {
      router.post(route("books.store"), formData);
    }
  };

  return (
    <Form
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Book Title"
            placeholder="Enter book title"
            isRequired
            isInvalid={!!error}
            validationBehavior="aria"
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="about"
        render={({ field, fieldState: { error } }) => (
          <Textarea
            {...field}
            label="About"
            placeholder="Describe the book"
            isRequired
            isInvalid={!!error}
            validationBehavior="aria"
            errorMessage={error?.message}
            className="min-h-[150px]"
          />
        )}
      />

      <Controller
        control={control}
        name="cover_url"
        render={({ field, fieldState: { error } }) => (
          <>
            <label className="block text-sm font-medium text-gray-700">
              Cover Image {isEditing ? "(Leave blank to keep current)" : ""}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => field.onChange(e.target.files)}
              className={`mt-1 block w-full rounded-md border ${
                error ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error.message}</p>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="url"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            value={field.value ?? ""}
            label="Book URL (Optional)"
            placeholder="https://example.com"
            isInvalid={!!error}
            validationBehavior="aria"
            errorMessage={error?.message}
          />
        )}
      />

      <Button intent="secondary" className="mt-4" type="submit">
        {isEditing ? "Update Book" : "Create Book"}
      </Button>
    </Form>
  );
}

export default BookForm;
