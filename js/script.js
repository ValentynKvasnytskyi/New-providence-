$(document).ready(function(){$(window).scroll(function(){1<$(window).scrollTop()?$("#header .nav-wrap").addClass("white-bg"):$("#header .nav-wrap").removeClass("white-bg")}),$("#open-menu").click(function(){$("#slide-out-menu").addClass("show-menu")}),$("#menu-close").click(function(){$("#slide-out-menu").removeClass("show-menu")}),(new WOW).init(),$(".popup-youtube").magnificPopup({type:"iframe"}),$(".slider").slick({autoplay:!1,slidesToShow:1,centerMode:!1,adaptiveHeight:!0,nextArrow:$("#next"),prevArrow:$("#prev"),mobileFirst:!0}),$("#switch-left").click(function(){$("#switch-left").addClass("active"),$("#switch-left").hasClass("active")&&$("#switch-right").removeClass("active")}),$("#switch-right").click(function(){$("#switch-right").addClass("active"),$("#switch-right").hasClass("active")&&$("#switch-left").removeClass("active")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIldPVyIsImluaXQiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsInNsaWNrIiwiYXV0b3BsYXkiLCJzbGlkZXNUb1Nob3ciLCJjZW50ZXJNb2RlIiwiYWRhcHRpdmVIZWlnaHQiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJtb2JpbGVGaXJzdCIsImhhc0NsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUVqQkYsRUFBRUcsUUFBUUMsT0FBTyxXQUNlLEVBQXhCSixFQUFFRyxRQUFRRSxZQUNWTCxFQUFFLHFCQUFxQk0sU0FBUyxZQUdoQ04sRUFBRSxxQkFBcUJPLFlBQVksY0FJM0NQLEVBQUUsY0FBY1EsTUFBTSxXQUNyQlIsRUFBRSxtQkFBbUJNLFNBQVMsZUFFL0JOLEVBQUUsZUFBZVEsTUFBTSxXQUN0QlIsRUFBRSxtQkFBbUJPLFlBQVksZ0JBR2xDLElBQUlFLEtBQU1DLE9BRVZWLEVBQUUsa0JBQWtCVyxjQUFjLENBQzlCQyxLQUFNLFdBR1RaLEVBQUUsV0FBV2EsTUFBTSxDQUNqQkMsVUFBVSxFQUNWQyxhQUFjLEVBQ2RDLFlBQVksRUFDWkMsZ0JBQWdCLEVBQ2hCQyxVQUFXbEIsRUFBRSxTQUNibUIsVUFBV25CLEVBQUUsU0FDYm9CLGFBQWEsSUFFaEJwQixFQUFFLGdCQUFnQlEsTUFBTSxXQUN2QlIsRUFBRSxnQkFBZ0JNLFNBQVMsVUFDeEJOLEVBQUUsZ0JBQWdCcUIsU0FBUyxXQUM3QnJCLEVBQUUsaUJBQWlCTyxZQUFZLFlBR2pDUCxFQUFFLGlCQUFpQlEsTUFBTSxXQUN4QlIsRUFBRSxpQkFBaUJNLFNBQVMsVUFDekJOLEVBQUUsaUJBQWlCcUIsU0FBUyxXQUM5QnJCLEVBQUUsZ0JBQWdCTyxZQUFZIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0Ly9oZWFkZXItbmF2XHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdCAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMSkge1xyXG5cdCAgICAgICAgJCgnI2hlYWRlciAubmF2LXdyYXAnKS5hZGRDbGFzcygnd2hpdGUtYmcnKTtcclxuXHQgICAgfVxyXG5cdCAgICBlbHNlIHtcclxuXHQgICAgICAgICQoJyNoZWFkZXIgLm5hdi13cmFwJykucmVtb3ZlQ2xhc3MoJ3doaXRlLWJnJyk7XHJcblx0ICAgIH1cclxuXHR9KTtcclxuXHQvL29wZW4tY2xvc2UgbWVudVxyXG5cdCQoJyNvcGVuLW1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnI3NsaWRlLW91dC1tZW51JykuYWRkQ2xhc3MoJ3Nob3ctbWVudScpO1xyXG5cdH0pO1xyXG5cdCQoJyNtZW51LWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJyNzbGlkZS1vdXQtbWVudScpLnJlbW92ZUNsYXNzKCdzaG93LW1lbnUnKTtcclxuXHR9KTtcclxuXHQvL2FuaW1hdGVcclxuXHRuZXcgV09XKCkuaW5pdCgpO1xyXG5cdC8vd2F0Y2ggdmlkZW8gaGVhZGVyXHJcblx0JCgnLnBvcHVwLXlvdXR1YmUnKS5tYWduaWZpY1BvcHVwKHsgXHJcbiAgICBcdHR5cGU6ICdpZnJhbWUnIFxyXG4gXHR9KTtcclxuIFx0Ly9zbGlkZXJcclxuIFx0JChcIi5zbGlkZXJcIikuc2xpY2soe1xyXG4gIFx0XHRhdXRvcGxheTogZmFsc2UsXHJcbiAgXHRcdHNsaWRlc1RvU2hvdzogMSxcclxuICBcdFx0Y2VudGVyTW9kZTogZmFsc2UsXHJcbiAgXHRcdGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gIFx0XHRuZXh0QXJyb3c6ICQoJyNuZXh0JyksXHJcbiAgXHRcdHByZXZBcnJvdzogJCgnI3ByZXYnKSxcclxuICBcdFx0bW9iaWxlRmlyc3Q6IHRydWVcclxuXHR9KTtcclxuXHQkKCcjc3dpdGNoLWxlZnQnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnI3N3aXRjaC1sZWZ0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0aWYoJCgnI3N3aXRjaC1sZWZ0JykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdCQoJyNzd2l0Y2gtcmlnaHQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnI3N3aXRjaC1yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcjc3dpdGNoLXJpZ2h0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0aWYoJCgnI3N3aXRjaC1yaWdodCcpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHQkKCcjc3dpdGNoLWxlZnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pOyJdfQ==
