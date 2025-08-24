// --- DATABASE LOKAL ---
// Data video disimpan di sini. Edit, tambah, atau hapus video dari daftar ini.
const localVideoDatabase = [
    {
        "title": "SONE-760 Tak Sia-Sia Bertahan 10 Tahun - Fuua Kaede",
        "views": "1K",
        "duration": "02:00:00",
        "img": "https://placehold.co/640x360/333/fff?text=Video+1",
        "url": "#"
    },
    {
        "title": "JUFE-591 Digenjot Dua Pria Negro - Jun Suehiro",
        "views": "1.2K",
        "duration": "02:20:00",
        "img": "https://placehold.co/640x360/444/fff?text=Video+2",
        "url": "#"
    },
    {
        "title": "HMN-640 Bar-Bar, Maniak, Vulgar, Pasti Mina Kitano Lah",
        "views": "653",
        "duration": "03:10:00",
        "img": "https://placehold.co/640x360/555/fff?text=Video+3",
        "url": "#"
    },
    {
        "title": "NIMA-030 Terpesona Oppai Gedeku, Club Tenis Sekolah Berubah Menjadi Mesum!",
        "views": "997",
        "duration": "02:00:00",
        "img": "https://placehold.co/640x360/666/fff?text=Video+4",
        "url": "#"
    },
    {
        "title": "NACR-986 Demi Suamiku Tercinta, Aku Rela Tidur Dengan Bosnya - Hikari",
        "views": "856",
        "duration": "02:03:00",
        "img": "https://placehold.co/640x360/777/fff?text=Video+5",
        "url": "#"
    },
    {
        "title": "ROYD-250 Cinta Dan Benci Emang Beda Tipis - Asuka Momose",
        "views": "447",
        "duration": "02:00:00",
        "img": "https://placehold.co/640x360/888/fff?text=Video+6",
        "url": "#"
    }
];

// --- FUNGSI UTAMA ---

// Event listener untuk memastikan kode berjalan setelah semua elemen HTML dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Memilih elemen dari HTML untuk dimanipulasi
    const videoGrid = document.getElementById('video-grid');
    const emptyMessage = document.getElementById('empty-message');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Fungsi untuk membuat satu kartu video HTML dari data objek
    function createVideoCard(video) {
        return `
            <div class="bg-gray-800 rounded-lg overflow-hidden group">
                <a href="${video.url || '#'}" target="_blank" class="block relative">
                    <img src="${video.img}" alt="${video.title}" class="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/640x360/1a202c/718096?text=Image+Error';">
                    <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    <div class="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">${video.duration || 'N/A'}</div>
                    <div class="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                        <i class="ph-fill ph-eye mr-1"></i>
                        ${video.views || '0'}
                    </div>
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i class="ph-fill ph-play-circle text-white text-5xl"></i>
                    </div>
                </a>
                <div class="p-3">
                    <h3 class="text-sm font-semibold text-white truncate group-hover:text-pink-400 transition-colors duration-300">
                        <a href="${video.url || '#'}" target="_blank">${video.title || 'No Title'}</a>
                    </h3>
                </div>
            </div>
        `;
    }

    // Fungsi untuk menampilkan semua video dari database ke dalam grid
    function displayVideos() {
        const videos = localVideoDatabase;
        
        if (!videos || videos.length === 0) {
            emptyMessage.style.display = 'block';
        } else {
            videoGrid.innerHTML = ''; // Kosongkan grid sebelum diisi
            videos.forEach(video => {
                videoGrid.innerHTML += createVideoCard(video);
            });
        }
    }

    // --- FUNGSI UI & EVENT LISTENERS ---

    // Menampilkan tombol "kembali ke atas" saat scroll ke bawah
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Fungsi klik untuk tombol "kembali ke atas"
    scrollToTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Fungsi klik untuk tombol menu mobile
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- INISIALISASI ---
    // Memanggil fungsi utama untuk menampilkan video saat halaman pertama kali dimuat
    displayVideos();
});
