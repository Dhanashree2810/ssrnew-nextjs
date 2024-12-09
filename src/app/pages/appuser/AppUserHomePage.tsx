'use client'
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoInbox } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import Link from 'next/link';
import { CgEye } from "react-icons/cg";
import { RiFileEditLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import user1 from '@/assets/images/user (1).png'
import user2 from '@/assets/images/user (2).png'
import user3 from '@/assets/images/user.png'
import Image from 'next/image';


export default function AppUserHomePage(props: any) {
    const listHomeCommonData = props?.listHomeCommonData;
    const summaryData = listHomeCommonData?.summaryData;
    const topData = listHomeCommonData?.topData;
    const listHtmlData = props?.htmlData;
    const listHomeUserData = props?.listHomeUserData;

    const itemTemplate = (item: any) => {
        return (
            <div>
                <div className="p-5 shadow-lg rounded-lg">
                    <div className="mb-3 flex justify-center">
                        <Image
                            src={user3}
                            alt={item.name}
                            className="h-32 w-32 object-cover rounded-full"
                            objectFit='cover'
                        />
                    </div>
                    <div className="text-center">
                        <h4 className="text-lg font-semibold mb-1">{item.name}</h4>
                        <h6 className="text-gray-600 text-sm mb-3">{item.emailId}</h6>
                        <div className="car-buttons flex justify-center gap-3 mt-5">
                            <Link href={`/appuser/view/${item.id}`} className="flex items-center justify-center rounded-full p-3 bg-gradient-to-r from-[#9333EA] to-[#609AF8]">
                                <CgEye className=' text-white h-7 w-7' />
                            </Link>
                            <Link href={`/appuser/edit/${item.id}`} className="flex items-center justify-center rounded-full p-3 bg-gradient-to-r from-[#9333EA] to-[#609AF8]">
                                <RiFileEditLine className=' text-white h-7 w-7' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="relative flex flex-col p-5">
            <div className="flex flex-col border-none mb-10">
                <section className="p-2 lg:ml-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
                        <div className="bg-white shadow p-5 border border-gray-200 rounded">
                            <div className="flex justify-between mb-3">
                                <div>
                                    <span className="block text-gray-500 font-medium mb-3">Total</span>
                                    <div className="text-gray-900 font-medium text-xl">{summaryData[0].total}</div>
                                </div>
                                <div className="flex items-center justify-center bg-blue-100 rounded" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <CiShoppingCart className=' text-blue-500 h-7 w-7' />

                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow p-5 border border-gray-200 rounded">
                            <div className="flex justify-between mb-3">
                                <div>
                                    <span className="block text-gray-500 font-medium mb-3">Average</span>
                                    <div className="text-gray-900 font-medium text-xl">{summaryData[0].avgNo}</div>
                                </div>
                                <div className="flex items-center justify-center bg-orange-100 rounded" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <MdOutlineLocationOn className=' text-orange-500 h-7 w-7' />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow p-5 border border-gray-200 rounded">
                            <div className="flex justify-between mb-3">
                                <div>
                                    <span className="block text-gray-500 font-medium mb-3">Max No</span>
                                    <div className="text-gray-900 font-medium text-xl">{summaryData[0].maxNo}</div>
                                </div>
                                <div className="flex items-center justify-center bg-cyan-100 rounded" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <GoInbox className=' text-cyan-500  h-7 w-7' />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow p-5 border border-gray-200 rounded">
                            <div className="flex justify-between mb-3">
                                <div>
                                    <span className="block text-gray-500 font-medium mb-3">Min No</span>
                                    <div className="text-gray-900 font-medium text-xl">{summaryData[0].minNo}</div>
                                </div>
                                <div className="flex items-center justify-center bg-purple-100 rounded" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <FaRegComment className=' text-purple-500 h-7 w-7' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-2 flex items-center justify-center my-8">
                    <Link href="/appuser">
                        <Button
                            label="View all AppUsers"
                            className="p-button-raised p-button-rounded rounded-md bg-gradient-to-r from-[#9333EA] to-[#609AF8] text-white p-4 border-none"
                        />
                    </Link>
                </section>

                <section className="p-2">
                    {topData && (
                        <div>
                            <h5 className="text-left text-2xl lg:text-3xl font-bold mb-5">Achievers</h5>
                            <Carousel
                                value={topData}
                                numVisible={3}
                                numScroll={3}
                                circular={false}
                                itemTemplate={itemTemplate}
                            />
                        </div>
                    )}
                </section>

                <section className="lg:p-10 lg:mb-10">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-32">
                        <div className="bg-white shadow-md rounded p-4">
                            <div className="flex justify-between items-center mb-5">
                                <span className="text-xl font-semibold">Created by Me</span>
                            </div>
                            <ul>
                                {listHomeUserData?.topData?.map((item: any) => (
                                    <li
                                        key={item.name}
                                        className="flex flex-row items-center justify-between lg:gap-48 mb-8"
                                    >
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={user1}
                                                alt={item.name}
                                                className="w-32 h-32 object-cover rounded-full"
                                                objectFit='cover'
                                            />
                                        </div>

                                        <div className="flex flex-col justify-between items-start flex-1">
                                            <div>
                                                <span className="font-medium text-gray-900">{item.name}</span>
                                                <div className="text-gray-600">{item.emailId}</div>
                                            </div>
                                            <div className="mt-2 flex space-x-2">
                                                <Link
                                                    href={`/appuser/view/${item.id}`}
                                                    className="flex items-center justify-center rounded-full p-3 bg-gradient-to-r from-[#9333EA] to-[#609AF8]"
                                                >
                                                    <CgEye className="text-white h-5 w-5" />
                                                </Link>

                                                <Link
                                                    href={`/appuser/edit/${item.id}`}
                                                    className="flex items-center justify-center rounded-full p-3 bg-gradient-to-r from-[#9333EA] to-[#609AF8]"
                                                >
                                                    <RiFileEditLine className="text-white h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white shadow-md rounded p-4">
                            <div className="flex justify-between items-center mb-5">
                                <span className="text-xl font-medium">
                                    Top {listHomeCommonData?.topData?.length} Users
                                </span>
                            </div>

                            <ul className="max-h-80">
                                {listHomeCommonData?.topData?.map((item: any) => (
                                    <li
                                        key={item.name}
                                        className="flex flex-row items-center justify-between lg:gap-48 mb-8"
                                    >
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={user1}
                                                alt={item.name}
                                                className="w-32 h-32 object-cover rounded-full"
                                                objectFit='cover'
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center items-start flex-1">
                                            <div>
                                                <span className="font-medium text-gray-900">{item.name}</span>
                                                <div className="text-gray-600">{item.emailId}</div>
                                            </div>
                                            <div className="mt-2 flex space-x-2">
                                                <Link
                                                    href={`/appuser/view/${item.id}`}
                                                    className="flex items-center justify-center rounded-full p-3 bg-gradient-to-r from-[#9333EA] to-[#609AF8]"
                                                >
                                                    <CgEye className="text-white h-5 w-5" />
                                                </Link>
                                                <Link
                                                    href={`/appuser/edit/${item.id}`}
                                                    className="flex items-center justify-center rounded-full p-3 bg-gradient-to-r from-[#9333EA] to-[#609AF8]"
                                                >
                                                    <RiFileEditLine className="text-white h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {listHomeCommonData?.lastData?.length > 0 && (
                    <section className="px-2 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            {listHomeCommonData.lastData.slice(0, 4).map((item: any, index: any) => (
                                <Card key={index} className="shadow-md text-center p-5">
                                    <Image
                                        src={user2}
                                        alt="Image"
                                        className="mx-auto block mb-4 w-32 h-32"
                                        objectFit='cover'
                                    />
                                    <div className="text-xl font-medium mb-3 text-gray-900">{item.name}</div>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.
                                    </p>
                                    <div className='flex space-x-2 justify-center'>
                                        <Link
                                            href={`/appuser/view/${item.id}`}
                                            className="flex items-center text-white rounded-full p-3 bg-gradient-to-r from-[#9333EA] to-[#609AF8] space-x-2"
                                        >
                                            <FaArrowRight className="w-5 h-5" />
                                            <span>View</span>
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}

                <div className="table-title">
                    {listHtmlData && listHtmlData.length && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: listHtmlData.join(''),
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
