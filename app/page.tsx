import Chat from '@/components/Chat/Chat';
import styles from './page.module.css';
 
export const dynamic = 'force-dynamic';
 
export default function Page() {
  return (
    <main className={styles.main}>
      <Chat />
    </main>
  )
}