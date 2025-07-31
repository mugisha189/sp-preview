import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
});

const slides = [
  {
    image: '/images/culinary.png',
    quote:
      'I was able to enroll, track my assessments, and get placement updates easily. It helped me stay on top of my training',
    author: 'Student',
    role: 'General overview',
  },
  {
    image: '/images/contruct-train.png',
    quote:
      'We used to rely on scattered data and manual follow-ups. Now, the system gives us one place to monitor performance and make smart decisions.',
    author: 'RTB Staff',
    role: 'General Overview',
  },
  {
    image: '/images/construct-2.png',
    quote:
      "The system has revolutionized how we manage student placements and track progress. It's an indispensable tool for modern vocational training.",
    author: 'Employer',
    role: 'Partner Company',
  },
];

function RouteComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-svh flex flex-col bg-accent relative">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Card className="bg-card z-10 flex-row p-0 max-w-md h-fit border-none flex w-full justify-center overflow-hidden">
          <div className="w-full flex flex-col items-center justify-center p-8">
            <Outlet />
          </div>
        </Card>
      </div>
      {/* Footer */}
      <footer className="w-full py-4 px-8 flex items-center justify-between bg-white border-t border-gray-100 text-sm fixed bottom-0 left-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">System owned by:</span>
          <img src="/logortb.jpg" alt="RTB Rwanda TVET Board" className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Language:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 py-1 text-sm">
                <Icons.Globe className="size-4" />
                <span>English</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>Kinyarwanda</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </footer>
    </div>
  );
}
