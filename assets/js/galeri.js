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

    // Set filter "foto" sebagai filter aktif dan tampilkan kontennya saat halaman dimuat
    var activeFilter = 'foto';
    toggleFilterContainers(activeFilter);

    // Menampilkan atau menyembunyikan gambar sesuai dengan filter yang aktif
    if (activeFilter === 'foto') {
        fotoImage.style.display = 'block';
        videoImage.style.display = 'none';
    } else if (activeFilter === 'video') {
        fotoImage.style.display = 'none';
        videoImage.style.display = 'block';
    }

    // Tambahkan event listener untuk setiap link filter
    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var clickedFilter = this.getAttribute('data-filter');

            // Mengubah filter aktif
            activeFilter = clickedFilter;

            // Memperbarui tampilan berdasarkan filter yang aktif
            toggleFilterContainers(activeFilter);

            // Memperbarui tampilan gambar atau video sesuai dengan filter yang aktif
            if (activeFilter === 'foto') {
                fotoImage.style.display = 'block';
                videoImage.style.display = 'none';
            } else if (activeFilter === 'video') {
                fotoImage.style.display = 'none';
                videoImage.style.display = 'block';
            }

            // Menghapus kelas "current" dari semua link dan menambahkan kelas "current" pada link yang diklik
            filterLinks.forEach(function (link) {
                link.parentElement.classList.remove('current');
            });
            this.parentElement.classList.add('current');
        });
    });
});
