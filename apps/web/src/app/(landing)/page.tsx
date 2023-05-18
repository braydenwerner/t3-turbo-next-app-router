"use client";

import { Button, ToastAction, useToast } from "@blaze-ai/ui";

import { ThemeToggle } from "~/features/ui/theme-toggle";

export default function LandingPage() {
  const { toast } = useToast();

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
      <div className="mt-2 bg-accent">test 2</div>
      <ThemeToggle />
    </div>
  );
}
