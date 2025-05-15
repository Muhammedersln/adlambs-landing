import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// API yöntemleri için export OPTIONS fonksiyonunu ekle - CORS sorunu çözümü
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}

export async function POST(request: Request) {
  // SendGrid API anahtarını yapılandır
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error('SendGrid API anahtarı bulunamadı');
    return NextResponse.json(
      { error: 'E-posta servisi yapılandırması eksik' },
      { status: 500 }
    );
  }

  sgMail.setApiKey(apiKey);

  try {
    // Request body'yi parse et
    const body = await request.json().catch(err => {
      console.error('JSON parse hatası:', err);
      return null;
    });

    // Body kontrolü
    if (!body) {
      return NextResponse.json(
        { error: 'Geçersiz istek formatı' },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    // Zorunlu alanları kontrol et
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun' },
        { status: 400 }
      );
    }

    // From email kontrolü
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'info@adlambs.com';

    // E-posta mesajını hazırla
    const msg = {
      to: 'info@adlambs.com',
      from: fromEmail,
      subject: `AdLambs İletişim Formu: ${name}`,
      text: `İsim: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
      html: `
        <div>
          <h3>AdLambs İletişim Formu</h3>
          <p><strong>İsim:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Mesaj:</strong> ${message}</p>
        </div>
      `,
    };

    // E-postayı gönder
    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('E-posta gönderimi başarısız:', error);
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu', details: error instanceof Error ? error.message : 'Bilinmeyen hata' },
      { status: 500 }
    );
  }
} 