import Link from 'next/link'

export default function NotFound() {
    return (

        <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden " >
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="@container">
                            <div className="@[480px]:px-4 @[480px]:py-3">

                                <div
                                    className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-gray-50 @[480px]:rounded-xl min-h-[218px]"
                                    style={{
                                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvtz77DOFnrez_-bgFDLJLOwidoy2ZcufUL3U8Wq6Bf85ApSUwvj3SHp8UN1s1LOfqNzX_eHuqAUgb0ePOBpB7xevKtr_JyQgN_2YXV0N2-eKK4vdNle7KKOYUhUDdbTxXIderIv5_c_pImauStdzEC9fbw7JSwwrOZyUiOFynMxXHpDid_rW7a4g9SPg2lM7RTd1YTrr4DM_WL92qssK5Xu4o-fEF9JGkkj4k1xum6Dk9AdpmWboSz0S0X2no44quub9LXENONQ")'
                                    }}
                                ></div>

                            </div>
                        </div>
                        <h2 className="text-[#101418] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Oops! Page Not Found</h2>
                        <p className="text-[#101418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                        <div className="flex px-4 py-3 justify-center">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#b2cae5] text-[#101418] text-sm font-bold leading-normal tracking-[0.015em]"
                            >
                                <Link className="truncate" href="/">Go to Homepage</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}