$(document).ready(function(){$(window).scroll(function(){1<$(window).scrollTop()?$("#header .nav-wrap").addClass("white-bg"):$("#header .nav-wrap").removeClass("white-bg")}),$("#open-menu").click(function(){$("#slide-out-menu").addClass("show-menu")}),$("#menu-close").click(function(){$("#slide-out-menu").removeClass("show-menu")}),$(document).mouseup(function(e){0===$("#slide-out-menu").has(e.target).length&&$("#slide-out-menu").removeClass("show-menu")}),(new WOW).init(),$(".popup-youtube").magnificPopup({type:"iframe"}),$(".slider").slick({autoplay:!1,slidesToShow:1,centerMode:!1,adaptiveHeight:!0,nextArrow:$("#next"),prevArrow:$("#prev"),mobileFirst:!0}),$("#switch-left").click(function(){$("#switch-left").addClass("active"),$("#switch-left").hasClass("active")&&$("#switch-right").removeClass("active")}),$("#switch-right").click(function(){$("#switch-right").addClass("active"),$("#switch-right").hasClass("active")&&$("#switch-left").removeClass("active")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIm1vdXNldXAiLCJlIiwiaGFzIiwidGFyZ2V0IiwibGVuZ3RoIiwiV09XIiwiaW5pdCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwic2xpY2siLCJhdXRvcGxheSIsInNsaWRlc1RvU2hvdyIsImNlbnRlck1vZGUiLCJhZGFwdGl2ZUhlaWdodCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsIm1vYmlsZUZpcnN0IiwiaGFzQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBRWpCRixFQUFFRyxRQUFRQyxPQUFPLFdBQ2UsRUFBeEJKLEVBQUVHLFFBQVFFLFlBQ1ZMLEVBQUUscUJBQXFCTSxTQUFTLFlBR2hDTixFQUFFLHFCQUFxQk8sWUFBWSxjQUkzQ1AsRUFBRSxjQUFjUSxNQUFNLFdBQ3JCUixFQUFFLG1CQUFtQk0sU0FBUyxlQUUvQk4sRUFBRSxlQUFlUSxNQUFNLFdBQ3RCUixFQUFFLG1CQUFtQk8sWUFBWSxlQUVsQ1AsRUFBRUMsVUFBVVEsUUFBUSxTQUFVQyxHQUVhLElBRHZCVixFQUFFLG1CQUNKVyxJQUFJRCxFQUFFRSxRQUFRQyxRQUN4QmIsRUFBRSxtQkFBbUJPLFlBQVksZ0JBT3pDLElBQUlPLEtBQU1DLE9BRVZmLEVBQUUsa0JBQWtCZ0IsY0FBYyxDQUM5QkMsS0FBTSxXQUdUakIsRUFBRSxXQUFXa0IsTUFBTSxDQUNqQkMsVUFBVSxFQUNWQyxhQUFjLEVBQ2RDLFlBQVksRUFDWkMsZ0JBQWdCLEVBQ2hCQyxVQUFXdkIsRUFBRSxTQUNid0IsVUFBV3hCLEVBQUUsU0FDYnlCLGFBQWEsSUFFaEJ6QixFQUFFLGdCQUFnQlEsTUFBTSxXQUN2QlIsRUFBRSxnQkFBZ0JNLFNBQVMsVUFDeEJOLEVBQUUsZ0JBQWdCMEIsU0FBUyxXQUM3QjFCLEVBQUUsaUJBQWlCTyxZQUFZLFlBR2pDUCxFQUFFLGlCQUFpQlEsTUFBTSxXQUN4QlIsRUFBRSxpQkFBaUJNLFNBQVMsVUFDekJOLEVBQUUsaUJBQWlCMEIsU0FBUyxXQUM5QjFCLEVBQUUsZ0JBQWdCTyxZQUFZIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0Ly9oZWFkZXItbmF2XHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdCAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMSkge1xyXG5cdCAgICAgICAgJCgnI2hlYWRlciAubmF2LXdyYXAnKS5hZGRDbGFzcygnd2hpdGUtYmcnKTtcclxuXHQgICAgfVxyXG5cdCAgICBlbHNlIHtcclxuXHQgICAgICAgICQoJyNoZWFkZXIgLm5hdi13cmFwJykucmVtb3ZlQ2xhc3MoJ3doaXRlLWJnJyk7XHJcblx0ICAgIH1cclxuXHR9KTtcclxuXHQvL29wZW4tY2xvc2UgbWVudVxyXG5cdCQoJyNvcGVuLW1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnI3NsaWRlLW91dC1tZW51JykuYWRkQ2xhc3MoJ3Nob3ctbWVudScpO1xyXG5cdH0pO1xyXG5cdCQoJyNtZW51LWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJyNzbGlkZS1vdXQtbWVudScpLnJlbW92ZUNsYXNzKCdzaG93LW1lbnUnKTtcclxuXHR9KTtcclxuXHQkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBcdHZhciBjb250YWluZXIgPSAkKFwiI3NsaWRlLW91dC1tZW51XCIpO1xyXG4gICAgXHRpZiAoY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBcdCQoJyNzbGlkZS1vdXQtbWVudScpLnJlbW92ZUNsYXNzKCdzaG93LW1lbnUnKTtcclxuXHQgICAgfVxyXG5cdH0pO1xyXG5cclxuXHJcblxyXG5cdC8vYW5pbWF0ZVxyXG5cdG5ldyBXT1coKS5pbml0KCk7XHJcblx0Ly93YXRjaCB2aWRlbyBoZWFkZXJcclxuXHQkKCcucG9wdXAteW91dHViZScpLm1hZ25pZmljUG9wdXAoeyBcclxuICAgIFx0dHlwZTogJ2lmcmFtZScgXHJcbiBcdH0pO1xyXG4gXHQvL3NsaWRlclxyXG4gXHQkKFwiLnNsaWRlclwiKS5zbGljayh7XHJcbiAgXHRcdGF1dG9wbGF5OiBmYWxzZSxcclxuICBcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG4gIFx0XHRjZW50ZXJNb2RlOiBmYWxzZSxcclxuICBcdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgXHRcdG5leHRBcnJvdzogJCgnI25leHQnKSxcclxuICBcdFx0cHJldkFycm93OiAkKCcjcHJldicpLFxyXG4gIFx0XHRtb2JpbGVGaXJzdDogdHJ1ZVxyXG5cdH0pO1xyXG5cdCQoJyNzd2l0Y2gtbGVmdCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcjc3dpdGNoLWxlZnQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRpZigkKCcjc3dpdGNoLWxlZnQnKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0JCgnI3N3aXRjaC1yaWdodCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcjc3dpdGNoLXJpZ2h0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJyNzd2l0Y2gtcmlnaHQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRpZigkKCcjc3dpdGNoLXJpZ2h0JykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdCQoJyNzd2l0Y2gtbGVmdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7Il19
