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
          class="relative flex flex-col min-w-0 break-words bg-red-900 w-full mb-8 shadow-lg rounded-lg"
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
          class="relative flex flex-col min-w-0 break-words bg-red-900 w-full mb-8 shadow-lg rounded-lg"
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
          class="relative flex flex-col min-w-0 break-words bg-red-900 w-full mb-8 shadow-lg rounded-lg"
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
          class="relative flex flex-col min-w-0 break-words bg-red-200 w-full mb-6 shadow-lg rounded-lg bg-red-900"
        >
          <div class="object-contain h-full w-full"></div>
          <blockquote class="relative p-8 mb-4">
            <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block"
                style="height: 95px; top: -94px;"
            ></svg>
            
            <h3 class="text-xl font-bold text-white mb-4">Join today</h3> <!-- Updated this line -->
            
            <p class="text-white"> <!-- Updated this line -->
                By joining the Flying Samaritans, you will gain invaluable experience in medicine, public service, and nonprofit work. This is a unique opportunity to apply your academic knowledge in real-world settings, make a tangible difference in people’s lives, and find deeply fulfilling work that goes beyond the classroom.
            </p>
        </blockquote>
        
        
        </div>
      </div>
    </div>
  </div>
  
</section>

<style></style>
