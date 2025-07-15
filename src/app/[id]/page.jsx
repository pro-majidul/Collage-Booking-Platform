import React from 'react';

const CollageDetails = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" >
            <div className="layout-container flex h-full grow flex-col">
                
                <div className="md:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-6xl flex-1">
                        <div className="">
                            <div className="px-4 py-3">
                                <div
                                    className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-50 [480px]:rounded-xl min-h-80"
                                style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVKltWeSW7iWOBQOY2q9OBXZ8Xy5EZG-LJZlotoqgtYb5E2CIYZo2-xz8G36Gx0Nw_VOB8GOrrz2zyTeDv5ulXeYWp1YZFwvQWBVOMq6oCCJogK6z8WfLDpRTrk9jyczIGP2SqL063lkIpcneJtHn7FPy7f5qg68ZGQE-jLSoRAJBCvYZjoIWHDnURGzraqtZzcFOeK2YbIjEEX4kixcmDe60Bh4eeq3a49s5LTiy67ME23pAWZ77drE2tDsfmJuIwq-8VNSw20v0");'}}
                                >
                                    <div className="flex p-4"><p className="text-white tracking-light text-[28px] font-bold leading-tight">University of Innovation</p></div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About University of Innovation</h2>
                        <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            University of Innovation is a leading institution known for its innovative programs and cutting-edge research. Our mission is to provide a transformative educational
                            experience that prepares students for success in a rapidly changing world. We offer a wide range of undergraduate and graduate programs across various disciplines,
                            fostering a collaborative and inclusive learning environment.
                        </p>
                        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Admissions</h2>
                        <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            The admission process at University of Innovation is highly competitive. We seek students who demonstrate academic excellence, leadership potential, and a passion for
                            learning. Applicants are evaluated based on their academic records, standardized test scores, essays, letters of recommendation, and extracurricular activities. We
                            encourage prospective students to visit our campus and attend information sessions to learn more about our programs and community.
                        </p>
                        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Events</h2>
                        <div className="p-4">
                            <div className="md:flex items-stretch justify-between gap-4 rounded-xl">
                                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                    <p className="text-[#49719c] text-sm font-normal leading-normal">Upcoming Event</p>
                                    <p className="text-[#0d141c] text-base font-bold leading-tight">Innovation Summit 2024</p>
                                    <p className="text-[#49719c] text-sm font-normal leading-normal">
                                        Join us for the annual Innovation Summit, featuring keynote speakers, workshops, and networking opportunities. This year's theme is 'Shaping the Future of
                                        Technology.'
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                              style={{ backgroundImage: ' url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMQAXH-31sZyGkwOOByzSVaHCq8luaLQKLoVKmqno0z2qE3GcTZu7HcbOfZg29hoxbQbep6oo2bJoklALtkC01hkH1FSmvrMmY0SZvqc33evagznd7swWzTHD6IYrrgJ559OO6aB4rCe6-UkDP37FuIU01i-mdHISTxLUKlXrUEbi1J0eGhup6TFSqXCI4WnvfFUcoskLTptG5v1ZW62zBsgvEhUp5_B_D3sVdRLgnW-bp_0Vjhng8HFucrHFE7FsjazrhWr3Ys6g");'}}
                                ></div>
                            </div>
                        </div>
                        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Research</h2>
                        <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            University of Innovation is at the forefront of groundbreaking research across various fields. Our faculty and students collaborate on projects that address
                            real-world challenges and contribute to advancements in science, technology, engineering, and mathematics (STEM). We are committed to fostering a culture of
                            innovation and discovery, providing resources and support for researchers to pursue their passions and make a meaningful impact.
                        </p>
                        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Sports</h2>
                        <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            Our university boasts a vibrant sports program with a wide range of athletic opportunities for students. From competitive teams to recreational activities, we
                            encourage participation and promote a healthy life style. Our state-of-the-art facilities and experienced coaches provide an excellent environment for athletes to
                            excel and develop their skills. We offer sports in categories such as basketball, soccer, tennis, swimming, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollageDetails;