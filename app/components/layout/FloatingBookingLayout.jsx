import CalendarFloatingIcon from "./CalendarFloatingIcon";

export default function FloatingBookingLayout({ children }) {
  return (
    <>
      {children}
      <CalendarFloatingIcon />
    </>
  );
}