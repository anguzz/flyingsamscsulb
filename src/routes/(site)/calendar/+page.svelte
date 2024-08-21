<script>
    // You can add props or script logic here if needed
  </script>
  
  <style>
    .iframe-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%; /* Full width */
      height: 100vh; /* Full viewport height */
      overflow: hidden;
      background-color: #fff; /* Fallback color */
    }
  
    iframe {
      width: 100%;
      height: 100%;
      border: 1px solid #777;
    }
  
    @media (max-width: 600px) {
      iframe {
        height: 300px; /* Smaller height on mobile devices */
      }
    }
  </style>
  
  <div class="iframe-container">
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23fffcd6&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ODY0YTE2YzgyNWE5ODM3ZTEyNmFkZTU5NWM5M2ZlZDQ5OWJmYzY3NDlmMjhlMWZlODI5NmU2YTU5YmZkMDI0MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>  
    </div>

    test