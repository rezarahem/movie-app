import { auth } from '@/auth';

const SettingsPage = async () => {
  const session = await auth();

  return <div className='p-4'>{JSON.stringify(session?.user)}</div>;
};

export default SettingsPage;
