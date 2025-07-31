import { Checkbox } from '@/components/ui/checkbox';

interface ScorePickerProps {
  value: number;
  onChange: (value: number) => void;
  options?: number[];
  className?: string;
}

export default function ScorePicker({ value, onChange, options = [1, 2, 3, 4, 5], className }: ScorePickerProps) {
  return (
    <div className={`flex gap-3 ${className || ''}`}>
      {options.map((opt) => (
        <label key={opt} className={`flex items-center gap-1 cursor-pointer select-none`}>
          <Checkbox
            checked={value === opt}
            onCheckedChange={() => onChange(opt)}
            className={value === opt ? 'bg-primary border-primary' : ''}
          />
          <span className={value === opt ? 'text-primary font-semibold' : 'text-muted-foreground'}>{opt}</span>
        </label>
      ))}
    </div>
  );
}
