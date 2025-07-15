
export default function Home() {

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" >
      <div className="layout-container flex h-full grow flex-col">

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div
                    className="text-[#4e7097] flex border-none bg-[#e7edf3] items-center justify-center pl-4 rounded-l-lg border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for colleges"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-full placeholder:text-[#4e7097] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"

                  />
                </div>
              </label>
            </div>
            <div className="p-4 container">
              <div className="flex flex-col items-stretch justify-start rounded-lg xl:flex-row xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: ' url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-se3xJpFqB4SmbuNgVww0suw8jtWzn_mhRJv9SHP1UHwgh3jHtdFAGa2mzwE7IFSekzXHPNTZbZL_amRNmmo-pvNGMfXDfFtS1lP4ZcdJqq3hz7UZscUxAHUwA0YI6_3sunQjhhRcZcE0fTxQNAi3zmajMyEbfhl-IW2f4SVdqMOJBu_AZLu-ZTQPQ8ZZDut6HmeInZUm_9J_czRxKIJ1EdAUHngmRYxzg0AScwopMDI1NmgB6P_ImP6Wu-rins4OeAFYUoxzgA");' }}
                ></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                  <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">University of Innovation</p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#4e7097] text-base font-normal leading-normal">A leading institution known for its innovative programs and research opportunities.</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal">
                        Admission Dates: May 1 - June 30 | Events: Orientation Week, Career Fair | Research History: 100+ publications | Sports: Basketball, Soccer
                      </p>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#0b79ee] hover:bg-[#0b79eee0] text-slate-50 hover:text-black text-sm font-medium leading-normal"
                    >
                      <span className="truncate">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 container">
              <div className="flex flex-col items-stretch justify-start rounded-lg xl:flex-row xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_ImeV9bAisucJMmh1brbvYNEQpaATbLk3mBiso9J8IZkk4udlu56SlGU80OBrOahQPI_58fCv9taJd-ZBZlMcUtJWzdnc21fwFULsWo5Fn-Or7s3HwYUdPUgcpscOPUWvKordtm0pMGgP8NdsjEy7gjdQw4euZwhJjlXc9DZf0hkVsYUuenOSg1WGM0odmCprxNSFtilo-gr87CndvIr6d9Tbk8Q_3x9u8yqDhzUj3gYko3RL2dmHj6xEs7tRSiaiNo3wKmCoeg");' }}
                ></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                  <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Global Scholars Institute</p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#4e7097] text-base font-normal leading-normal">A diverse community fostering global perspectives and academic excellence.</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal">
                        Admission Dates: April 15 - May 31 | Events: Alumni Meet, Tech Symposium | Research History: 50+ publications | Sports: Tennis, Swimming
                      </p>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#0b79ee] hover:bg-[#0b79eee0] text-slate-50 hover:text-black text-sm font-medium leading-normal"
                    >
                      <span className="truncate">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 container">
              <div className="flex flex-col items-stretch justify-start rounded-lg xl:flex-row xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: ' url("https://lh3.googleusercontent.com/aida-public/AB6AXuAa6oLyEZf-hBLyyn0FRMydwIJeazABBQNcKGOynPN_q6ScauDyii04i0dfAlVB06kAazhId7NRr9NgyaIdxH7GL1LYdSb0v4cKn57pSVEX8p6RJ6HThs-fLwEDoOSzPcaOQBKXwn1N1IqMaEoNAbFIQuiCx8ONsdabqtMAV2Wu5h1OZv-yzjVyEenHU53WGzAfWUvamLoc8v5C2qYYd62v-cEcfjW2xoDAnPQK5uDza8znB_4AeDw_iv5PMbZiJcPTEk9RmS2bXg");' }}
                ></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                  <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Metropolitan College</p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#4e7097] text-base font-normal leading-normal">A vibrant urban campus offering a wide range of academic and extracurricular activities.</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal">
                        Admission Dates: June 1 - July 15 | Events: Arts Festival, Science Expo | Research History: 75+ publications | Sports: Volleyball, Track and Field
                      </p>
                    </div>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#0b79ee] hover:bg-[#0b79eee0] text-slate-50 hover:text-black text-sm font-medium leading-normal"
                    >
                      <span className="truncate">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvt_CbW2lb8o7pw3X_DGQlBEZBYnd3-gYvFsR4XRwYSwXnqS_Ue9y-MFc465ciyjPpdMH4IJWIUalxDuPj2lXuGTXK69264owzgQiaWv5HSljD-9KIGJ2U4Y4dW6egqblix74P5d0xmL5u0V_J1skJ8enZrQGe6V23jr8zv2QLcJlnRdOJKyifSTEc9koPAlinJJf8C3czIkMhl2OEcmoiqduDZhacV7KuK-V1MyFeAa3-FCWzEbFA8_nAvNEpvUXF71eIexSyyw");' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBer9gIMaUWQwEiBKu1AYPBE576sGyh0zFpBoB7Gu1dg3wkyNsvZVx-CpF-CiekCmrmT04VoldlWS3p1LjzhFeezJwJvjfT0iOry3yWCqgUv2ElC0fvJImezHIO9W1_hiZwsb9XZCUtX9x3wjlp81z0phXvasEhFHzXKSyYDYhvDTHliwHjuMXS6Vk6YsoTzr6nO9yNFxtVXNatjGY1R9kc2gc3LMNTu_bPjqjeI01bjvwqUaiYvqa_T8H4n9vm-avZw-YKidtfWg");' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvu8AcKlWm9ckuXbA1_dBzPLk19XZeHD5lzmxdv-DVdq7XC5ooDmCvZn_uwq2mnKKFoDSZ4HgslVVYAUrcj57-S2Y7lXgLHXyBgnlVDDvnIBSs64-DfXbwmupIy-OHw521_iekJwfd3DDqkebjV3Q6zw9Xf5b6G8uGxHdZhHWjxNfUZxecTwvudAPO4MRPkNTFdOnDvpr_hvMkC6X99E5GNr-cccydpDXBq66EdiKKBzLN9dEIyrGIMlT8Ty89nSYz4UrV8gG_zQ");' }}
                ></div>
              </div>
            </div>
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Research Papers</h2>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Advancements in Renewable Energy</p>
                <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Published in the Journal of Advanced Studies</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">The Future of Artificial Intelligence</p>
                <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Published in the International Journal of Technology</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-12" data-icon="File" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Sustainable Practices in Urban Development</p>
                <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Published in the Journal of Environmental Science</p>
              </div>
            </div>
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Reviews</h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-slate-50 p-4">
              <div className="flex flex-col gap-3 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkQTi4qCSvuTacbAQYcIDnZ8iFL34e37wwyz860rSbirtSy0mJvrVxLqD5yIW0rAV14g48dj-prUNgiXQTZNXQG3z8tz200m3DKfzC9Mmctf52iqz0f3ZMsMcJABHssUwBXit2HzsyezSjg0cLCQIw_XnZLh4YIf0Lz-e4tvFPs1aJX_HvFwTafl3dAXsk-1YVJqcenVnYyhBEN5p8FgemfVb5OQJDFEFAaYFJR3LSocOMb0Jw3poFhU_dXavelBXLXw0cKQEB3g");'
                    }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#0e141b] text-base font-medium leading-normal">Sophia Clark</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal">2 months ago</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[#0e141b] text-base font-normal leading-normal">
                  The University of Innovation provided an exceptional learning environment with state-of-the-art facilities and dedicated faculty. The research opportunities were
                  invaluable, and the campus community was incredibly supportive.
                </p>
              </div>
              <div className="flex flex-col gap-3 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA30-2BJ4tSohJO3C3AUSLhgte7ZPenTSgCL10FPfnRwgvk99YsWHPmoNkiBeXrMLOeqnH_hXua7FgPURyBietZTMb5E87tNQpvLmbwzmutNSz8G3cSMWHJ4bF9iVziMCLgo6mkltOVFhXXAqluYu8iRgHRnS8gwcpQiHixktX-mRjt8i0j12DOvlvT4s4CxazKF-OZS8rTNrpyWm5-J6rXcaenQP2fzvp05wu6zvzIe36yTz-OpS34mujC1qs_nIvaNFAck6aFsw");'
                    }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#0e141b] text-base font-medium leading-normal">Ethan Carter</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal">3 months ago</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#1978e5]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#aec0d5]" data-icon="Star" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[#0e141b] text-base font-normal leading-normal">
                  Global Scholars Institute offers a unique global perspective with a diverse student body and engaging programs. The faculty are knowledgeable and approachable,
                  and the campus is well-equipped for both academic and extracurricular activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
