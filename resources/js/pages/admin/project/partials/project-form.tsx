import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TextField } from "@/components/ui/text-field";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Project, ProjectFormValues, STATUSPROJECT } from "@/types/project";
import { router } from "@inertiajs/react";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  tech_stack: yup.string().required("Tech stack is required"),
  url: yup.string().nullable().default(null),
  status: yup.string().required("Status is required"),
  cover_url: yup.mixed<FileList>().nullable().default(null),
});

interface ProjectFormProps {
  project: Project | null;
}

function ProjectForm({ project }: ProjectFormProps) {
  const isEditing = !!project;

  const { handleSubmit, control, setError, watch } = useForm<ProjectFormValues>(
    {
      resolver: yupResolver(validationSchema),
      defaultValues: {
        name: project?.name ?? "",
        description: project?.description ?? "",
        tech_stack: project?.tech_stack ?? "",
        url: project?.url ?? null,
        cover_url: null,
        status: project?.status ?? "published",
      },
    }
  );

  const onSubmit = (data: ProjectFormValues) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("tech_stack", data.tech_stack);
    if (data.cover_url && data.cover_url.length > 0) {
      formData.append("cover_url", data.cover_url[0]);
    }
    if (data.url) formData.append("url", data.url);
    formData.append("status", data.status);

    if (isEditing && project) {
      formData.append("_method", "PUT");
      router.post(route("projects.update", { id: project.id }), formData, {});
    } else {
      router.post(route("projects.store"), formData);
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
        name="name"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Project Name"
            placeholder="Enter project name"
            isRequired
            isInvalid={!!error}
            validationBehavior="aria"
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="tech_stack"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Tech Stack"
            placeholder="E.g. React, Laravel, TailwindCSS"
            isRequired
            isInvalid={!!error}
            validationBehavior="aria"
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field, fieldState: { error } }) => (
          <Textarea
            {...field}
            label="Description"
            placeholder="Describe your project"
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
            label="Project URL (Optional)"
            placeholder="https://example.com"
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
            <Select.List items={STATUSPROJECT}>
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
        {isEditing ? "Update Project" : "Create Project"}
      </Button>
    </Form>
  );
}

export default ProjectForm;
