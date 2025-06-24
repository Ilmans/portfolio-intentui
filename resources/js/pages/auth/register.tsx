import GuestLayout from "@/layouts/guest-layout"
import { Head, useForm } from "@inertiajs/react"
import type React from "react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { TextField } from "@/components/ui/text-field"
import { Form } from "@/components/ui/form"
import { Loader } from "@/components/ui/loader"

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  })

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation")
    }
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

    post("/register")
  }
  return (
    <>
      <Head title="Register" />

      <Form onSubmit={submit} validationErrors={errors} className="flex flex-col gap-y-4">
        <TextField
          type="text"
          name="name"
          label="Name"
          value={data.name}
          autoComplete="name"
          autoFocus
          onChange={(v) => setData("name", v)}
          errorMessage={errors.name}
          isRequired
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          value={data.email}
          autoComplete="username"
          onChange={(v) => setData("email", v)}
          errorMessage={errors.email}
          isRequired
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          value={data.password}
          autoComplete="current-password"
          onChange={(v) => setData("password", v)}
          errorMessage={errors.password}
          isRequired
        />

        <TextField
          type="password"
          label="Confirm Password"
          name="password_confirmation"
          value={data.password_confirmation}
          onChange={(v) => setData("password_confirmation", v)}
          errorMessage={errors.password_confirmation}
          isRequired
        />
        <Button type="submit" className="w-full" isPending={processing}>
          {processing && <Loader />}
          Register
        </Button>
        <div className="text-center">
          <Link href="/login" intent="secondary" className="sm:text-sm">
            Already registered?
          </Link>
        </div>
      </Form>
    </>
  )
}

Register.layout = (page: React.ReactNode) => (
  <GuestLayout header="Register" description="Create an account to get started." children={page} />
)
