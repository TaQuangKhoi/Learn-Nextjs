import Link from 'next/link';
import Button from '@mui/material/Button';

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <Button variant="contained">Back to home</Button>
                </Link>
            </h2>
        </>
    );
}