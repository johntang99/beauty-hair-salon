import { AlertTriangle } from 'lucide-react';

interface MedicalDisclaimerProps {
  variant?: 'blog' | 'case-study';
  className?: string;
}

export default function MedicalDisclaimer({ variant = 'blog', className = '' }: MedicalDisclaimerProps) {
  if (variant === 'case-study') {
    return (
      <div className={`bg-red-50 border-2 border-red-200 rounded-xl p-8 ${className}`}>
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <h2 className="font-bold text-subheading text-red-900">Important Medical Disclaimer</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Educational Purpose Only:</strong> The case studies presented on this page are for educational
            and informational purposes only. They are not intended to diagnose, treat, cure, or prevent any disease
            or medical condition.
          </p>
          <p>
            <strong>Individual Results Vary:</strong> Every patient is unique. The outcomes described in these case
            studies represent individual experiences and do not guarantee similar results for other patients. Your
            response to treatment may differ significantly based on your unique constitution, health history,
            lifestyle, and other factors.
          </p>
          <p>
            <strong>Not Medical Advice:</strong> Information in these case studies should not be considered medical
            advice or used as a substitute for professional healthcare consultation. Traditional Chinese Medicine is
            a complementary approach that works best when integrated with comprehensive healthcare.
          </p>
          <p>
            <strong>Consult Your Healthcare Provider:</strong> Always consult with a qualified, licensed healthcare
            provider before beginning any new treatment program, including Traditional Chinese Medicine. If you have
            a serious medical condition or symptoms, seek appropriate medical care immediately.
          </p>
          <p>
            <strong>Privacy Protection:</strong> All case studies have been anonymized to protect patient privacy.
            Identifying details have been removed or altered while maintaining the educational value of the clinical
            outcomes.
          </p>
          <p className="font-semibold text-red-800 pt-2">
            Emergency situations require immediate medical attention. Call 911 or go to the nearest emergency room if
            you are experiencing a medical emergency.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[var(--secondary-50)] border-l-4 border-amber-500 p-6 rounded-r-xl ${className}`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-subheading mb-2 text-amber-900">Medical Disclaimer</h3>
          <p className="text-small text-gray-700 leading-relaxed">
            The information provided in this article is for educational purposes only and is not intended as medical
            advice, diagnosis, or treatment. Traditional Chinese Medicine is a complementary healthcare approach and
            should not replace conventional medical care. Always consult with a qualified healthcare provider before
            starting any new treatment, making changes to existing treatments, or if you have questions about a
            medical condition. The content presented here represents general information about Traditional Chinese
            Medicine and may not be applicable to your individual circumstances. Dr Huang Clinic does not guarantee
            specific results from the information provided. If you are experiencing a medical emergency, please call
            911 or seek immediate medical attention.
          </p>
        </div>
      </div>
    </div>
  );
}
