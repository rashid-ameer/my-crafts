import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
  return (
    <div className="min-h-dvh w-full flex flex-col items-center justify-center py-10 md:py-20 px-4">
      <div className="w-full max-w-sm md:max-w-md">
        <div className="border p-4 md:p-6 rounded-md overflow-hidden">
          <div>
            <h2 className="text-2xl font-medium text-gray-800">Login</h2>
            <p className="text-sm mt-1 text-gray-500">
              Enter your email below to login into your account.
            </p>
          </div>

          <form className="mt-8 grid gap-6">
            <div className="space-y-2.5">
              <Label htmlFor="email">Email</Label>
              <Input placeholder="john@gmail.com" id="email" type="email" />
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between">
                <Label htmlFor="password">Passowrd</Label>
                <a
                  href="#"
                  className="text-sm underline underline-offset-4 leading-none">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" />
            </div>

            <Button className="cursor-pointer">Login</Button>
            <Button
              className="cursor-pointer hover:bg-gray-200"
              variant="outline">
              Login with Google
            </Button>

            <div className="text-center text-sm">
              Don't have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Signup
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
