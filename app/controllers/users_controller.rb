class UsersController < InheritedResources::Base

  private

    def user_params
      params.require(:user).permit(:link, :gender, :birthdate, :patient, :begin, :end, :info_research, :email_research, :departement_id, :diagnostic_id)
    end
end

