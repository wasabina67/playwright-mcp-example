import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useToast } from './ui/use-toast';

const reservationSchema = z.object({
  name: z.string().min(2, { message: 'お名前は2文字以上で入力してください' }),
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  phone: z.string().min(10, { message: '電話番号を正しく入力してください' }),
  guests: z.number().min(1).max(10),
  message: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export const ReservationForm = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: 2,
    }
  });

  const onSubmit: SubmitHandler<ReservationFormData> = async (data) => {
    if (!date) {
      toast({
        title: "エラー",
        description: "日付を選択してください",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // サーバーがない場合の模擬送信
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 成功した場合
      toast({
        title: "予約リクエスト送信完了!",
        description: "24時間以内にご連絡いたします",
      });

      reset();
      setDate(null);
    } catch (error) {
      toast({
        title: "エラーが発生しました",
        description: "後ほど再度お試しください",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium">
              お名前
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('name')}
              aria-label="お名前"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('email')}
              aria-label="メールアドレス"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="block font-medium">
              電話番号
            </label>
            <input
              id="phone"
              type="tel"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('phone')}
              aria-label="電話番号"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="guests" className="block font-medium">
              人数
            </label>
            <select
              id="guests"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register('guests', { valueAsNumber: true })}
              aria-label="人数"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}名
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="block font-medium">
            ご希望日時
          </label>
          <DatePicker
            id="date"
            selected={date}
            onChange={(date) => setDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="yyyy/MM/dd HH:mm"
            minDate={new Date()}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholderText="日時を選択してください"
            aria-label="予約日時"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block font-medium">
            メッセージ（任意）
          </label>
          <textarea
            id="message"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            {...register('message')}
            aria-label="メッセージ"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-amber-500 text-white py-3 px-6 rounded-md font-medium
            hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500
            ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? '送信中...' : '予約をリクエスト'}
        </button>
      </form>
    </div>
  );
};
