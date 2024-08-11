import React from "react";

function LeftSider() {
  return (
    <div className="lg:fixed left-0 bottom-0 px-5  static">
      <div className=" flex-col items-center lg:flex  hidden">
        <div className="flex lg:flex-col gap-1 flex-row pb-5 lg:pb-0">
          <a href="https://google.com">
            <i class="ri-facebook-circle-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
          </a>

          <i class="ri-mail-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
          <i class="ri-linkedin-box-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
          <i class="ri-instagram-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
          <i class="ri-github-line text-gray-400 text-xl cursor-pointer hover:text-secondary"></i>
        </div>
        <div className="w-[1px] h-32 bg-primary hidden lg:block"></div>
      </div>
    </div>
  );
}

export default LeftSider;