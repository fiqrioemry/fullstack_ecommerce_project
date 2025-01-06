import AuthForm from "@/components/form/AuthForm";
import { useAuthStore } from "@/store/useAuthStore";
import { useHandleForm } from "@/hooks/useHandleForm";
import { controlSignUpForm, initialSignUpForm } from "@/config";

const SignUp = () => {
  const { userSignUp, isAuthLoading } = useAuthStore();
  const { formData, handleChange, handleSubmit, handleValidate } =
    useHandleForm(initialSignUpForm);

  const isValid = handleValidate();

  const onSubmit = () => userSignUp(formData);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <div className="w-full h-full bg-primary"></div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <AuthForm
              path="/signin"
              isValid={isValid}
              formData={formData}
              submitTitle={"Sign-Up"}
              footerLink={"Sign in "}
              isLoading={isAuthLoading}
              handleChange={handleChange}
              controlForm={controlSignUpForm}
              buttonTitle={"Sign Up with Google"}
              footerTitle={"Already have an account ? "}
              onSubmit={(e) => handleSubmit(e, onSubmit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;