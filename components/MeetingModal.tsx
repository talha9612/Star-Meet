"use client";
import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed inset-1/2 top-1/2 left-1/2 w-full max-w-[520px] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
          <VisuallyHidden>
            <Dialog.Title>{title}</Dialog.Title>
          </VisuallyHidden>
          <div className="flex flex-col gap-6">
            {image && (
              <div className="flex justify-center">
                <Image src={image} alt="checked" width={72} height={72} />
              </div>
            )}
            <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
              {title}
            </h1>
            {children}
            <Button
              className={
                "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
              }
              onClick={handleClick}
            >
              {buttonIcon && (
                <Image
                  src={buttonIcon}
                  alt="button icon"
                  width={13}
                  height={13}
                />
              )}{" "}
              &nbsp;
              {buttonText || "Schedule Meeting"}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MeetingModal;
