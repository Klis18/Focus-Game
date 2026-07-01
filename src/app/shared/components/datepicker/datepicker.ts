import { Component, ElementRef, HostListener, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CalendarDay {
  day: number | null;
  date: Date | null;
  isToday: boolean;
  isWeekend: boolean;
}

@Component({
  selector: 'datepicker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datepicker.html',
})
export class DatepickerComponent implements OnInit {
  isOpen = false;
  selectedDate: Date | null = null;
  currentMonth: Date = new Date();
  sendSelectedDate = output<Date>();

  readonly months = ['Enero','Febrero','Marzo','Abril','Mayo',
    'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  readonly weekDays = ['Lu','Ma','Mi','Ju','Vi','Sá','Do'];

  calendarDays: CalendarDay[] = [];

  constructor(private el: ElementRef){}

  ngOnInit(): void {
    this.buildCalendar();
  }

  get monthLabel(): string {
    return `${this.months[this.currentMonth.getMonth()]} ${this.currentMonth.getFullYear()}`;
  }

  get displayDate(): string {
    if (!this.selectedDate) return 'Elige una fecha';
    const d = this.selectedDate;
    this.sendSelectedDate.emit(this.selectedDate);
    return `${d.getDate()}/${this.months[d.getMonth()]}/${d.getFullYear()}`;

  }

  buildCalendar(): void {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const today = new Date();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Ajuste: semana empieza en lunes (0=lunes)
    let startOffset = firstDay.getDay();
    startOffset = startOffset === 0 ? 6 : startOffset - 1;

    const days: CalendarDay[] = [];

    // Celdas vacías al inicio
    for (let i = 0; i < startOffset; i++) {
      days.push({ day: null, date: null, isToday: false, isWeekend: false });
    }

    // Días del mes
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dayOfWeek = (startOffset + d - 1) % 7; // 5=sábado, 6=domingo
      days.push({
        day: d,
        date,
        isToday: today.toDateString() === date.toDateString(),
        isWeekend: dayOfWeek === 5 || dayOfWeek === 6,
      });
    }

    this.calendarDays = days;
  }

  prevMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1, 1
    );
    this.buildCalendar();
  }

  nextMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1, 1
    );
    this.buildCalendar();
  }

  selectDate(day: CalendarDay): void {
    if (!day.date) return;
    this.selectedDate = day.date;
    this.isOpen = false;
  }

  goToToday(): void {
    this.selectedDate = new Date();
    this.currentMonth = new Date();
    this.buildCalendar();
    this.isOpen = false;
  }

  clear(): void {
    this.selectedDate = null;
  }

  isSelected(day: CalendarDay): boolean {
    return !!this.selectedDate && !!day.date &&
      this.selectedDate.toDateString() === day.date.toDateString();
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}