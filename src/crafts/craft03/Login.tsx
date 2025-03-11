import { GalleryVerticalEnd, LucideGithub } from "lucide-react";
import img from "./login-page.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
function Login() {
  return (
    <div className="min-h-dvh flex flex-col">
      <div className="flex-1 grid lg:grid-cols-2">
        <div className="p-6 md:p-10 flex flex-col gap-4">
          <div className="flex justify-center md:justify-start">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="size-6 rounded-md bg-gray-950 text-white flex items-center justify-center">
                <GalleryVerticalEnd className="size-4" />
              </div>
              Acme Inc.
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Login to your account
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Enter your email below to login to your account
                </p>
              </div>

              <form className="grid gap-6 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="john@gmail.com" type="email" id="email" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="underline underline-offset-4 leading-none text-sm">
                      Forgot your password?
                    </a>
                  </div>
                  <Input type="password" id="password" />
                </div>

                <Button>Login</Button>

                <div className="text-gray-500 text-center relative after:absolute after:border-t after:inset-0 after:top-1/2 after:z-0">
                  <span className="relative text-sm bg-white z-10 px-2">
                    Or continue with
                  </span>
                </div>

                <Button variant="outline" className="hover:bg-gray-200">
                  <LucideGithub />
                  Login with Github
                </Button>

                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <a href="#" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Login;
