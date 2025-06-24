import GuestLayout from "@/layouts/guest-layout"
import { Head, useForm } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { TextField } from "@/components/ui/text-field"
import { Loader } from "@/components/ui/loader"

interface ForgotPasswordProps {
  status: string
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    post(route("password.email"))
  }

  return (
    <>
      <Head title="Forgot Password" />
      {status && <div className="font-medium text-sm text-success">{status}</div>}

      <Form className="mt-4 space-y-4" validationErrors={errors} onSubmit={submit}>
        <TextField
          type="text"
          name="email"
          value={data.email}
          isRequired
          errorMessage={errors.email}
          autoFocus
          onChange={(v) => setData("email", v)}
        />

        <div className="flex items-center justify-end">
          <Button type="submit" className="w-full" isPending={processing}>
            {processing && <Loader />}
            Email Password Reset Link
          </Button>
        </div>
      </Form>
    </>
  )
}

ForgotPassword.layout = (page: any) => (
  <GuestLayout
    header="Forgot Password"
    description="
                    Forgot your password? No problem. Just let us know your email address and we will email you a password
                    reset link that will allow you to choose a new one."
    children={page}
  />
)
