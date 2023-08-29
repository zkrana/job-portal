


let JbDesc = document.getElementById("jb-descriptionId");
let JbBenefits = document.getElementById("jb-benefitsId");

    if(JbDesc.classList.contains('activeTab')){
        JbBenefits.classList.remove('activeTab');
        JbBenefits.classList.add('disableTab');
    }

JbBenefits.addEventListener('click',  () =>{
    
    if(!JbBenefits.classList.contains('activeTab')){
        JbDesc.classList.remove('activeTab');
        JbDesc.classList.add('disableTab');
        JbBenefits.classList.remove('disableTab');
        JbBenefits.classList.add('activeTab');
    }
})

JbDesc.addEventListener('click', () =>{
    if(!JbDesc.classList.contains('activeTab')){
        JbBenefits.classList.remove('activeTab');
        JbDesc.classList.add('activeTab');
        JbDesc.classList.remove('disableTab');
        JbBenefits.classList.add('disableTab');
    }
})


    let test = document.getElementById("job-type");
    
    const header = document.querySelector(".fixed-navbar");
    const toggleClass = "is-sticky";

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
    });

    
    let jbMbMenu = document.getElementById('jb-mobile-nav');
    let jbMbMenu2 = document.getElementById('tryit');
    let jbMbMenuDis = document.getElementById('jb-mb-menu-show');

    jbMbMenu.addEventListener("click", () => {
        jbMbMenuDis.classList.add('jb-Mb-Menu-active');
    });

    document.addEventListener("click", (e) => {
        if(e.target == jbMbMenu2){
            jbMbMenuDis.classList.remove('jb-Mb-Menu-active');
        }
    });

    /* Filter Panel */
    let filterTrigger = document.getElementById('filter-for-mb-trigger');
    let filterShowTrigger = document.getElementById('filter-for-mobile');
    let filterShowTriggerClose = document.getElementById('close-filter-mb-panel');
    

    filterTrigger.addEventListener('click', () =>{
        filterShowTrigger.classList.add('jb-filter-for-mb-wrapper')
    })

    document.addEventListener("click", (e) => {
        if(e.target == filterShowTriggerClose){
            filterShowTrigger.classList.remove('jb-filter-for-mb-wrapper');
        }
    });


    //
// Tabs Toggler
//

( function( $ ) {
    // Variables
    const $tabLink = $( '#tabs-section .tab-link' );
    const $tabBody = $( '#tabs-section .tab-body' );
    let timerOpacity;

    // Toggle Class
    const init = () => {
        // Menu Click
        $tabLink.off( 'click' ).on( 'click', function( e ) {
            // Prevent Default
            e.preventDefault();
            e.stopPropagation();

            // Clear Timers
            window.clearTimeout( timerOpacity );

            // Toggle Class Logic
            // Remove Active Classes
            $tabLink.removeClass( 'active ' );
            $tabBody.removeClass( 'active ' );
            $tabBody.removeClass( 'active-content' );

            // Add Active Classes
            $( this ).addClass( 'active' );
            $( $( this ).attr( 'href' ) ).addClass( 'active' );

            // Opacity Transition Class
            timerOpacity = setTimeout( () => {
                $( $( this ).attr( 'href' ) ).addClass( 'active-content' );
            }, 50 );
        } );
    };

    // Document Ready
    $( function() {
        init();
    } );
}( jQuery ) );

