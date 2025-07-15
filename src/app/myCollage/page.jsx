import React from 'react';

const page = () => {
    return (

        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
            style={{
                '--select-button-svg': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' fill='rgb(78,112,151)' viewBox='0 0 256 256'%3e%3cpath d='M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z'%3e%3c/path%3e%3c/svg%3e")`,
                fontFamily: `"Plus Jakarta Sans", "Noto Sans", sans-serif`,
            }}
        >
            <div className="layout-container flex h-full grow flex-col">

                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">My Applications</p></div>
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Applied</h3>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-xl">
                                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                    <p className="text-[#0e141b] text-base font-bold leading-tight">University of Innovation</p>
                                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Application submitted on March 15, 2024</p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApgM95MbTt_F2-vylh766iDC2wsgzd-1PO_SyI7KAd5u7odDVYkZsVQkY_igGVotSB37x_uUCSz0VRGoVQngFY0b2Vp6A9XP6m1KPltBx80AG-iXn96UJJ4x6SbxYv_5Rj82fJ-7ubwrJJx3cZBQlTypfFEAgph1KNrcKLtkk77S1zxB_9xKYMMgyi0plvLC6biB58Q8afDwbULWjpFXeHecnejS_CfuqB1A0mqY4rr6JZ-62WV-K8oPHHvWJXtEns-ey9YhXpl-w");' }}
                                ></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-xl">
                                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                    <p className="text-[#0e141b] text-base font-bold leading-tight">Tech Institute of Advanced Studies</p>
                                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Application submitted on March 10, 2024</p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCvnA466sVdJlAx33xDDyAGAllwsxhBmj8WMKIY5PGmnAWI7cBGIsBBf046VbBavCuUVQ3uneruAIu1yTtNlqN9bpC9QUjc-cPg627Pg854NMg7Em8QUU1bGpuO3LLG2ObyMs3-ZkWDZkR9Y1nlx7G8ITaDV3IO8IcPl7K_qFM0jKCBSaTkGh7eS8oMzJTHkNNqJRMM2cf5S0A6rY4s5bRZwxLjuGvtmKVH1mg3cYmJg7kcH0J3_E-VWdNpOXMWI5Nywf_J9JVREg");' }}
                                ></div>
                            </div>
                        </div>
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Accepted</h3>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-xl">
                                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                    <p className="text-[#0e141b] text-base font-bold leading-tight">Global Arts and Design College</p>
                                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Accepted on April 5, 2024</p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                                    style={{ backgroundImage: ' url("https://lh3.googleusercontent.com/aida-public/AB6AXuBt3fpSjIEVZ0qHQdmLYHfBe8qtFCHSzhA_UWpLd5cyqAgh5FjpMkvges2rWlYtzdarptuuVC-35g8WnkRD5gdYw2q70UqaFEQ17OVgoB1PrrS7c0JHB3FkMIyqNwseTBVeIGyOFHnUJ7KABKEsarFto_igRldH3KpUxqD4O0BNe9fiTCgPBQN8cBgPgXJBB8NCLKQaKYCjo3UD1cJBoHbhbjMWD2hp-hy65hVHbsygI-EEZ65uAKywhOKidD2ErQTZoJlfxyPBjJY");' }}
                                ></div>
                            </div>
                        </div>
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Rejected</h3>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-xl">
                                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                    <p className="text-[#0e141b] text-base font-bold leading-tight">Metropolitan State University</p>
                                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Rejected on April 10, 2024</p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc8Xrmw13GlBGSNxQPxj6fNuCXnpCQ9wfqVdR4_3mo9WEk7iKjP5nSimyb__Ao5TDyqatMz4AGhg5jq5t0wAYxS0GnbHAACgU-kFx85Ck1sseJpYBnO-BFXnZi-Q8TA7RscM1J-JzFxVE14-aEYaarpb_cNzq-cl2prKE-Z2iDb1qGdsxdou_uZ7D6op5qvr9rO8nBvRmUs2wPyCmfvFw-92J0xLRAv65mAtxtpD6C6MVgMPnjFuUmawovdq3OZGRaAEp8W_a9jnc");' }}
                                ></div>
                            </div>
                        </div>
                        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Add a Review</h3>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <select
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 bg-[image:--select-button-svg] placeholder:text-[#4e7097] p-[15px] text-base font-normal leading-normal"
                                >
                                    <option value="one">Select a college</option>
                                    <option value="two">two</option>
                                    <option value="three">three</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <input
                                    placeholder="Rating (1-5)"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7097] p-[15px] text-base font-normal leading-normal"

                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <textarea
                                    placeholder="Write your review"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] min-h-36 placeholder:text-[#4e7097] p-[15px] text-base font-normal leading-normal"
                                ></textarea>
                            </label>
                        </div>
                        <div className="flex px-4 py-3 justify-end">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1978e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                            >
                                <span className="truncate">Submit Review</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default page;