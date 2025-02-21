// Overclocking page component, left the page the same from the previous project
const Overclocking = () => (
  <div class="index-body">
    <div class="background2">
      <div class="overclock-body" role="main" aria-live="polite">
        <h2>Overclocking</h2>
        <p>
          Overclocking is the process of increasing the clock rate of a computer
          component beyond the factory-defined specifications. This is usually
          done to increase the performance of the component. Overclocking can be
          done to the CPU, GPU, RAM, and other components. However, it is most
          commonly done to the GPU. Overclocking can be done through the BIOS or
          through software.
        </p>
        <p>
          Provided is a starter video to overclocking your GPU. This video will
          give you the basics of overclocking your GPU and how to use software
          that allows you to overclock.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6_Me603fnq8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Starter video to overclocking your GPU"
        ></iframe>
        <p>
          Overclocking can be dangerous if done incorrectly, as it can cause the
          component to overheat and fail. It is important to monitor the
          temperature of the component when overclocking to ensure that it does
          not overheat. Overclocking can void the warranty of the component, so
          it is important to be aware of this before overclocking.
        </p>
        <p>
          Provided is a link to download MSI Afterburner, a popular software for
          overclocking GPUs and is the software showcased in the video above.
        </p>
        <a
          href="https://www.msi.com/Landing/afterburner/graphics-cards"
          target="_blank"
          class="button"
        >
          Download MSI Afterburner
        </a>
      </div>
    </div>
  </div>
);

export default Overclocking;
