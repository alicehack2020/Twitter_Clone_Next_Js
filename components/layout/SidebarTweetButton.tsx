import { SparklesIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React from 'react';
 type SidebarTweetButtonProps = {
    
};

const SidebarTweetButton:React.FC<SidebarTweetButtonProps> = () => {
    const router=useRouter()
    return (<div onClick={()=>router.push('/')}>
        <div className='bg-blue-400 w-full items-center flex justify-center rounded-full p-1'>
            <SparklesIcon className='h-8 lg:hidden' />
            <p className='font-semibold hidden lg:block'>Tweet</p>
        </div>
    </div>)
}
export default SidebarTweetButton;