"use client";

import { Button, Test, ToastAction, useToast } from "@blaze-ai/ui";

export default function IndexPage() {
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
      <Test />
      <div className="mt-2 bg-accent">test 2</div>
    </div>
  );
}
