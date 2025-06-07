import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <>
      <Header />
      <Button size="small" shape="rounded-sm" text="Small" />
      <Button size="medium" shape="rounded-md" text="Medium" />
      <Button size="large" shape="rounded-full" text="Large" />
    </>
  );
}
