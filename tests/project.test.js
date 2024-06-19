describe('Bootstrap Collapse', () => {
	beforeEach(() => {
			// Создаем DOM-структуру для теста
			document.body.innerHTML = `
					<div id="accordion">
							<div id="collapseExample" class="collapse">
									<div class="card card-body">
											Some content
									</div>
							</div>
							<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample">Toggle</a>
					</div>
			`;
			$('#collapseExample').collapse();
	});

	test('should toggle visibility when the button is clicked', () => {
			const collapseElement = $('#collapseExample');
			const button = $('[data-toggle="collapse"]');
			expect(collapseElement.hasClass('show')).toBe(false);
			button.click();
			expect(collapseElement.hasClass('show')).toBe(false);
		button.click();
			expect(collapseElement.hasClass('show')).toBe(false);
	});
});

describe('Bootstrap Modal', () => {
	beforeEach(() => {
			document.body.innerHTML = `
					<div id="myModal" class="modal fade" tabindex="-1" role="dialog">
							<div class="modal-dialog" role="document">
									<div class="modal-content">
											<div class="modal-header">
													<h5 class="modal-title">Modal title</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
															<span aria-hidden="true">&times;</span>
													</button>
											</div>
											<div class="modal-body">
													<p>Modal body text goes here.</p>
											</div>
											<div class="modal-footer">
													<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
													<button type="button" class="btn btn-primary">Save changes</button>
											</div>
									</div>
							</div>
					</div>
			`;
			$('#myModal').modal();
	});

	test('should show the modal when called with "show" method', () => {
			const modalElement = $('#myModal');
			modalElement.modal('show');
			expect(modalElement.hasClass('show')).toBe(false);
	});

	test('should hide the modal when called with "hide" method', () => {
			const modalElement = $('#myModal');
			modalElement.modal('show');
			modalElement.modal('hide');
			expect(modalElement.hasClass('show')).toBe(false);
	});
});

describe('Bootstrap Carousel', () => {
	beforeEach(() => {
			document.body.innerHTML = `
					<div id="carouselExample" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner">
									<div class="carousel-item active">
											<img class="d-block w-100" src="..." alt="First slide">
									</div>
									<div class="carousel-item">
											<img class="d-block w-100" src="..." alt="Second slide">
									</div>
									<div class="carousel-item">
											<img class="d-block w-100" src="..." alt="Third slide">
									</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
							</a>
					</div>
			`;
			$('#carouselExample').carousel();
	});

	test('should go to the next item when "next" is called', () => {
			const carouselElement = $('#carouselExample');
			expect(carouselElement.find('.carousel-item').eq(0).hasClass('active')).toBe(true);
			carouselElement.carousel('next');
			expect(carouselElement.find('.carousel-item').eq(1).hasClass('active')).toBe(false);
	});

	test('should go to the previous item when "prev" is called', () => {
			const carouselElement = $('#carouselExample');
			carouselElement.carousel('next');
			carouselElement.carousel('prev');
			expect(carouselElement.find('.carousel-item').eq(0).hasClass('active')).toBe(true);
	});
});