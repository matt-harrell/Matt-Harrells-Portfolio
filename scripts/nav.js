let containerHeader = document.getElementsByClassName("header");

const navBar = `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-0 d-flex justify-content-end">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav w-100 d-flex justify-content-between">

            <li class="nav-item flex-fill p-0">
              <a class="nav-link btn-dark text-center" href="index.html">Portfolio</a>
            </li>

            <li class="nav-item flex-fill">
              <a class="nav-link btn-dark text-center" href="resume.html">Resume</a>
            </li>

            <li class="nav-item flex-fill">
              <a class="nav-link text-center btn-dark" href="contact.html">Contact</a>
            </li>

          </ul>

        </div>
        
    </nav>

`;

$(".container.header").after(navBar);

// $(navBar).appendTo( ".container.header" );
// containerHeader.append(navBar);
