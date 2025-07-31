import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TaskReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: {
    id: string;
    title: string;
  };
}

export function TaskReportModal({
  isOpen,
  onClose,
  task,
}: TaskReportModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Task Performend</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="font-semibold mb-2">Task {task.id}</div>
          <p className="text-muted-foreground mb-4">{task.title}</p>

          <div className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">Description of what you did</Label>
              <Textarea
                placeholder="What did you do?"
                id="description"
                rows={4}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="tools">
                Tools, materials, equipment and consumables*
              </Label>
              <Textarea
                placeholder="Enter tools, materials ..."
                id="tools"
                rows={4}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save performed task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
