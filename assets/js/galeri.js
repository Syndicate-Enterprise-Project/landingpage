document.addEventListener("DOMContentLoaded", function () {
    var filterLinks = document.querySelectorAll('.b-isotope-filter a');
    var filterContainers = document.querySelectorAll('.grid-item-galeri');
    var fotoImage = document.querySelector('.foto');
    var videoImage = document.querySelector('.video');

    // Fungsi untuk menampilkan atau menyembunyikan elemen berdasarkan filter yang aktif
    function toggleFilterContainers(activeFilter) {
        filterContainers.forEach(function (container) {
            if (container.classList.contains(activeFilter)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }

    // Fungsi untuk menampilkan konten berdasarkan filter yang dipilih
    function showContent(filter) {
        if (filter === 'foto') {
            fotoImage.style.display = 'block';
            videoImage.style.display = 'none';
        } else if (filter === 'video') {
            fotoImage.style.display = 'none';
            videoImage.style.display = 'block';
        }
    }

    // Set filter aktif berdasarkan URL jika ada
    var urlParams = new URLSearchParams(window.location.search);
    var defaultFilter = urlParams.get('filter');
    var activeFilter = defaultFilter && (defaultFilter === 'foto' || defaultFilter === 'video') ? defaultFilter : 'foto';
    
    // Menampilkan konten berdasarkan filter yang dipilih
    toggleFilterContainers(activeFilter);
    showContent(activeFilter);

    // Tambahkan event listener untuk setiap link filter
    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var clickedFilter = this.getAttribute('data-filter');

            // Memeriksa apakah link yang diklik sudah memiliki kelas "current"
            if (!this.parentElement.classList.contains('current')) {
                // Menghapus kelas "current" dari semua link
                filterLinks.forEach(function (link) {
                    link.parentElement.classList.remove('current');
                });

                // Menambahkan kelas "current" pada link yang diklik
                this.parentElement.classList.add('current');

                // Mengubah filter aktif
                activeFilter = clickedFilter;

                // Memperbarui tampilan berdasarkan filter yang aktif
                toggleFilterContainers(activeFilter);

                // Memperbarui tampilan gambar atau video sesuai dengan filter yang aktif
                showContent(activeFilter);
            }
        });
    });
});
