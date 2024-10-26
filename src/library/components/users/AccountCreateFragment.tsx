import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeadFragment from "@/library/components/HeadFragment";
import InputWrapper from "@/library/components/InputWrapper";

function AccountCreateFragment({
  onClick,
  onEmailChange,
  onPasswordChange,
}: Readonly<{
  onEmailChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}>) {
  return (
    <div className="border border-gray-300 min-w-[400px] max-w-[400px] flex flex-col p-5 bg-white shadow-sm m-3 rounded-md">
      <HeadFragment
        des="you must assign access credentials"
        title="Create User Account"
      />
      <div className="flex gap-5 flex-col">
        <InputWrapper label="Email">
          <Input
            onChange={onEmailChange}
            autoComplete={"email"}
            type="email"
            placeholder="example@gmail.com"
          />
        </InputWrapper>
        <InputWrapper
          p="Password must be more then 6+ character"
          label="Password"
        >
          <Input onChange={onPasswordChange} type="password" placeholder="Enter Password" />
        </InputWrapper>
        <Button onClick={onClick} className="bg-sky-500 text-white"> Create User</Button>
      </div>
    </div>
  );
}

export default AccountCreateFragment;
