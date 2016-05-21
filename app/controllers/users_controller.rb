class UsersController < InheritedResources::Base

  private

    def user_params
      params.require(:user).permit(:link, :patient, :gender, :birthdate, :begin, :end, :departement_id, :diagnostic_id)
    end
end

