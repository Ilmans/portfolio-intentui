import GuestLayout from "@/layouts/guest-layout"
import { Head, useForm } from "@inertiajs/react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { TextField } from "@/components/ui/text-field"
import { Loader } from "@/components/ui/loader"

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: "",
  })

  useEffect(() => {
    return () => {
      reset("password")
    }
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

    post("/confirm-password")
  }

  return (
    <>
      <Head title="Confirm Password" />

      <div className="mb-4 text-muted-fg text-sm">
        This is a secure area of the application. Please confirm your password before continuing.
      </div>

      <Form validationErrors={errors} onSubmit={submit}>
        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          value={data.password}
          className="mt-1 block w-full"
          autoFocus
          onChange={(v) => setData("password", v)}
        />

        <div className="mt-4 flex items-center justify-end">
          <Button isPending={processing}>
            {processing && <Loader />}
            Confirm
          </Button>
        </div>
      </Form>
    </>
  )
}

ConfirmPassword.layout = (page: any) => <GuestLayout header="Confirm password" children={page} />
