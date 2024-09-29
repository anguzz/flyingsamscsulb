<script lang="ts">
  import Page from "$lib/components/Page.svelte";
  import Text from "$lib/components/Text.svelte";
  import { primaryBackground } from "$lib/utils/constants";
  import Anchor from "$lib/components/Anchor.svelte";
  export let backgroundClass = primaryBackground;
  
  let box1title = "Student run";
  let box1info =
    "The Flying Samaritans is a completely student-run organization, driven by the passion and dedication of future healthcare professionals at CSULB. We take pride in providing essential medical services to underserved communities, empowering our members to step into leadership roles and gain invaluable real-world experience.";

  let box2title = "When we meet ";
  let box2info =
    "Our general meetings are held monthly on the first Monday of each month at 7pm";

  let box3title = "Our goals";
  let box3info =
    "We aim to expand our services by adding optometry and dentistry to our monthly clinics, addressing the growing needs of our community.";

  let showThumbs = false;
  let showCaptions = false;
</script>

<Anchor id="about" />

<section class="pb-20 relative block bg-grey-900">
  <div
    class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style="height: 80px;"
  ></div>
</section>
<section class="pb-20 pt-2 bg-amber-100 -mt-24">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-red-800 w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
            >
              <svg
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 346.351 346.351"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M344.153,61.722L289.881,7.451c-1.407-1.406-3.315-2.196-5.304-2.196c-1.988,0-3.896,0.79-5.303,2.197l-10.263,10.263
                          l-3.274-3.274c-2.87-2.871-7.503-2.936-10.453-0.149L46.657,212.206c-1.05,1.05-1.764,2.389-2.053,3.846l-13.407,67.685
                          L1.227,329.486c-1.51,2.305-1.635,5.252-0.325,7.676c1.31,2.424,3.844,3.935,6.599,3.935h159.511c4.143,0,7.5-3.357,7.5-7.5
                          s-3.357-7.5-7.5-7.5H62.827l5.847-5.848l66.882-13.246c1.457-0.289,2.796-1.004,3.846-2.054L337.314,96.324
                          c2.787-2.95,2.721-7.583-0.148-10.452l-3.276-3.276l10.266-10.267C347.083,69.4,347.083,64.651,344.153,61.722z M21.38,326.096
                          l18.109-27.646l14.885,14.884l-12.76,12.762H21.38z M130.406,292.731L67.452,305.2l-21.047-21.046l12.471-62.953l8.512-8.513
                          l71.53,71.531L130.406,292.731z M149.372,273.46l-71.225-71.226l16.243-15.343l70.323,70.324L149.372,273.46z M175.019,246.305
                          L105.3,176.586L236.437,52.725l62.443,62.445L175.019,246.305z M309.185,104.26l-61.838-61.839l12.938-12.221l61.119,61.123
                          L309.185,104.26z M323.284,71.987l-43.666-43.666l4.959-4.96l43.667,43.665L323.284,71.987z"
                  />
                </g>
              </svg>
            </div>
            <h6 class="text-xl font-semibold text-white">{box1title}</h6>
            <p class="mt-2 mb-4 text-white">{box1info}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 px-4 text-center text-white">
        <div
          class="relative flex flex-col min-w-0 break-words bg-red-800 w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
            >
              <svg
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 92 92"
                enable-background="new 0 0 92 92"
                xml:space="preserve"
              >
                <path
                  id="XMLID_1265_"
                  d="M35.4,54.3c11.7,0,21.2-9.5,21.2-21.1c0-11.7-9.5-21.1-21.2-21.1s-21.2,9.5-21.2,21.1
                          C14.3,44.8,23.8,54.3,35.4,54.3z M35.4,20c7.3,0,13.2,5.9,13.2,13.1c0,7.2-5.9,13.1-13.2,13.1s-13.2-5.9-13.2-13.1
                          C22.3,25.9,28.2,20,35.4,20z M45,56.2c-1.1-0.3-2.3-0.2-3.3,0.4l-6.3,3.8l-6.3-3.8c-1-0.6-2.2-0.7-3.3-0.4C19.7,58.2,0,65.3,0,76
                          c0,2.2,1.8,4,4,4h62.8c2.2,0,4-1.8,4-4C70.8,65.3,51.1,58.2,45,56.2z M11.2,72c3.4-2.6,9.1-5.4,15.3-7.6l6.8,4.1
                          c1.3,0.8,2.9,0.8,4.1,0l6.8-4.1c6.2,2.1,11.9,5,15.3,7.6H11.2z M91,69c0,1.7-1.3,3-3,3H74.6c-1.7,0-3-1.3-3-3s1.3-3,3-3h8.9
                          c-1.5-2-3.9-3.6-6.9-5.2c-1.5-0.8-2-2.6-1.2-4c0.8-1.5,2.6-2,4.1-1.2C83.8,57.9,91,62.8,91,69z M74.2,42.6c0-4.4-3.6-7.9-7.9-7.9
                          c-1.1,0-2.1,0.2-3.1,0.6c-1.5,0.6-3.3-0.1-3.9-1.6c-0.6-1.5,0.1-3.3,1.6-3.9c1.7-0.7,3.5-1.1,5.4-1.1c7.7,0,13.9,6.2,13.9,13.9
                          s-6.3,13.9-13.9,13.9c-4,0-7.8-1.7-10.4-4.7c-1.1-1.2-1-3.1,0.3-4.2c1.2-1.1,3.1-1,4.2,0.3c1.5,1.7,3.7,2.7,6,2.7
                          C70.6,50.5,74.2,46.9,74.2,42.6z"
                />
              </svg>
            </div>
            <h6 class="text-xl font-semibold">{box2title}</h6>
            <p class="mt-2 mb-4 text-white">{box2info}</p>
          </div>
        </div>
      </div>

      <div class="pt-6 w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-red-800 w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
            >
              <svg
                height="24px"
                width="24px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <style type="text/css">
                  .st0 {
                    fill: #000000;
                  }
                </style>
                <g>
                  <path
                    class="st0"
                    d="M256,0C114.608,0.018,0.018,114.598,0,256c0.018,141.392,114.608,255.982,256,256
                          c141.393-0.018,255.982-114.608,256-256C511.982,114.598,397.393,0.018,256,0z M404.696,404.697
                          c-38.134,38.089-90.554,61.571-148.696,61.589c-58.143-0.018-110.571-23.5-148.697-61.589
                          C69.214,366.572,45.724,314.143,45.714,256c0.009-58.143,23.5-110.571,61.589-148.697C145.429,69.214,197.857,45.724,256,45.714
                          c58.143,0.009,110.563,23.5,148.696,61.589c38.089,38.126,61.58,90.554,61.589,148.697
                          C466.277,314.143,442.786,366.572,404.696,404.697z"
                  />
                  <polygon
                    class="st0"
                    points="185.169,165.33 185.169,373.027 211.134,373.027 211.134,282.16 347.429,282.16 347.429,165.33 
                          211.134,165.33 "
                  />
                </g>
              </svg>
            </div>
            <h6 class="text-xl font-semibold text-white">{box3title}</h6>
            <p class="mt-2 mb-4 text-white">{box3info}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center mt-12">
      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <h3 class="text-3xl mb-2 font-semibold leading-normal text-gray-700">
          About our clinic
        </h3>
        <p class="text-xl leading-relaxed mt-4 mb-4 text-gray-700">
          <span class="font-bold">Location:</span> <span class="font-medium">Fuentes del valle comedor, Tecate México</span> <br /><br />
          <span class="font-bold">Statistics:</span> <span class="font-medium">We see up to 30 patients during each clinic session,
          providing them with essential medical services that they might not
          otherwise have access to.</span> <br /><br />
          <span class="font-bold">Our doctors/providers:</span> <span class="font-medium">Our doctor Dr. Boucher and nurse practitioner
          Nancy have a combined experience of over 50 years in family medicine.
          They volunteer their time every single month and teach students while
          they practice their medicine.</span>
        </p>
        
      </div>

      <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div
          class="relative flex flex-col min-w-0 break-words bg-red-800 w-full mb-6 shadow-lg rounded-lg bg-red-800"
          >
          <div class="object-contain h-full w-full">


<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/flying_samaritans_csulb/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/flying_samaritans_csulb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this profile on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/flying_samaritans_csulb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank">Flying Samaritans CSULB</a> (@<a href="https://www.instagram.com/flying_samaritans_csulb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank">flying_samaritans_csulb</a>) • Instagram photos and videos</p></div></blockquote>
<script src="//www.instagram.com/embed.js"></script>

          </div>
          <blockquote class="relative p-8 mb-4">
          
            <h4 class="text-xl font-bold text-white">
              Our Mission
            </h4>
            <p class="text-md font-semibold mt-2 text-white">
By joining the Flying Samaritans, you will gain invaluable experience in medicine, public service, and nonprofit work. This is a unique opportunity to apply your academic knowledge in real-world settings, make a tangible difference in people’s lives, and find deeply fulfilling work that goes beyond the classroom.          </blockquote>
        </div>
      </div>



    </div>
  </div>
  
</section>

<style></style>
