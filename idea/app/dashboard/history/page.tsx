"use client";

import { useEffect, useState } from "react";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server"
import { desc, eq } from "drizzle-orm";
import { db } from '@/utils/db';
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Templates from "@/app/(data)/Templates";
import Image from "next/image";

export interface HISTORY {
    id: number;
    formData: string;
    aiResponse: string | null;
    templateSlug: string;
    createdBy: string;
    createdAt: string;
}

const History = () => {
    const [historyList, setHistoryList] = useState<HISTORY[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const user = await currentUser();
                console.log("Current User: ", user);
                if (user) {
                    const historyData: HISTORY[] = await db.select().from(AIOutput)
                        .where(eq(AIOutput.createdBy, user.primaryEmailAddress?.emailAddress))
                        .orderBy(desc(AIOutput.id));
                    console.log("Fetched History Data: ", historyData);
                    setHistoryList(historyData);
                }
            } catch (error) {
                console.error("Error fetching history: ", error);
            }
            setLoading(false);
        };
        fetchHistory();
    }, []);

    const getTemplateName = (slug: string) => {
        const template = Templates.find((item) => item.slug === slug);
        return template;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div className='p-5'>
      <Link href={"/dashboard"}>
        <Button> <ArrowLeft /> Back</Button>
      </Link>

        <div className='m-5 p-5 border rounded-lg bg-white'>
            
            <h2 className='font-bold text-3xl'>History</h2>
            <p className='text-gray-500'>Search your previously generated AI content</p>
            <div className='grid grid-cols-7 font-bold bg-gray-100 mt-5 p-2'>
                <h2 className="col-span-2">TEMPLATE</h2>
                <h2 className='col-span-2'>AI RESPONSE</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>COPY</h2>
            </div>
            {historyList.length === 0 ? (
                <div>No history found.</div>
            ) : (
                historyList.map((item) => (
                    <div key={item.id} className='grid grid-cols-7 my-5 py-3 px-3 border-b'>
                        <h2 className='col-span-2 flex gap-2 items-center'>
                            <Image src={getTemplateName(item.templateSlug)?.Icon || "/default-icon.png"} width={25} height={25} alt="Template Icon" />
                            {getTemplateName(item.templateSlug)?.name || "Unknown Template"}
                        </h2>
                        <h2 className='col-span-2 line-clamp-3'>{item.aiResponse || "No AI response available"}</h2>
                        <h2>{new Date(item.createdAt).toLocaleDateString()}</h2>
                        <h2>{item.aiResponse ? item.aiResponse.split(' ').length : 0}</h2>
                        <h2>
                            <Button variant='ghost' className='text-primary' onClick={() => item.aiResponse && navigator.clipboard.writeText(item.aiResponse)}>
                                Copy
                            </Button>
                        </h2>
                    </div>
                ))
            )}
        </div>
        </div>
    );
};

export default History;
